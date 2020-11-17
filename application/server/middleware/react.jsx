// eslint-disable react/jsx-props-no-spreading
/**
 * Es6 module for react server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/reactjs/react-router/blob/1.0.x/docs/guides/advanced/ServerRendering.md}
 * @see {@link https://github.com/reactjs/react-router/issues/1990}
 * @see {@link https://www.youtube.com/watch?v=PnpfGy7q96U}
 * @see {@link https://github.com/reactjs/redux/issues/723}
 */
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { get } from 'lodash';
import assert from 'assert-plus';

import { configApplication } from '../../common/config/application';
import { logger } from '../../common/utils/logger';
import { readFile } from '../utils/read-file';
import { Root } from '../../common/component/root';
import { Routes } from '../../common/component/routes';
import { LayoutHtmlConnected } from '../../common/component/layout/html';
import { configureStore } from '../../common/state/configure-store';
import { changeIntlLocale } from '../../common/state/intl/duck';
import { selectStateIntlLocale } from '../../common/state/intl/selector';
import {
    fetchConfigContentIfNeeded,
    fetchConfigTranslationIfNeeded
} from '../../common/state/config/duck';
import { changeCsrfToken } from '../../common/state/csrf/duck';

const { aboveTheFold } = configApplication;

/**
 * Create the final html result to be send to the client.
 *
 * @see {@link https://github.com/reactjs/react-router/issues/3183}
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17}
 * @see {@link https://github.com/ReactTraining/react-router/issues/902}
 *
 * @private
 * @param {string} url - The router path url
 * @param {object} store - The created redux store
 * @param {string} [cssBase=''] - The file contents from base.css
 * @param {string} [scriptBootstrap=''] - The file contents from loader.js
 * @returns {string} The rendered html string
 */
function render(url, store, cssBase = '', scriptBootstrap = '') {
    assert.string(url, 'url');
    assert.object(store, 'store');
    assert.optionalString(cssBase, 'cssBase');
    assert.optionalString(scriptBootstrap, 'scriptBootstrap');

    // This context object contains the results of the render, will
    // be mutated by react-router
    const context = {};

    return {
        html: renderToStaticMarkup(
            <Root {...{ store }}>
                <LayoutHtmlConnected {...{ store, cssBase, scriptBootstrap }}>
                    <StaticRouter context={context} location={url}>
                        <Routes />
                    </StaticRouter>
                </LayoutHtmlConnected>
            </Root>
        ),
        context
    };
}

/**
 * Read language which is given in the url locale parameter or via
 * express middleware and store the selection in redux.
 *
 * @private
 * @param {object} req - The current request object
 * @param {object} store - The complete redux store
 * @returns {string} The currently accepted locale
 */
function getLocale(req, store) {
    assert.object(req, 'req');
    assert.object(store, 'store');

    // @TODO Read locale from router params
    const urlLocale = get({}, 'router.params.locale', '');
    store.dispatch(
        changeIntlLocale(
            [urlLocale, urlLocale.toUpperCase()].join('-'),
            req.language
        )
    );
    const acceptedLocale = selectStateIntlLocale(store.getState());

    return acceptedLocale;
}

/**
 * Load all required data async via promises to
 * improve the overall node performance.
 *
 * @private
 * @param {object} req - The current request object
 * @param {object} store - The complete redux store
 * @param {string} acceptedLocale - The currently accepted locale
 * @returns {Promise} Async state when initial data is loaded
 */
function loadData(req, store, acceptedLocale) {
    assert.object(req, 'req');
    assert.object(store, 'store');
    assert.string(acceptedLocale, 'acceptedLocale');
    const { dispatch } = store;

    return Promise.all([
        readFile(aboveTheFold.cssBase),
        readFile(aboveTheFold.scriptBootstrap),
        dispatch(fetchConfigContentIfNeeded()),
        dispatch(fetchConfigTranslationIfNeeded(acceptedLocale)),
        dispatch(changeCsrfToken(req.csrfToken && req.csrfToken()))
    ]);
}

/**
 * Handle react server rendering and react routering.
 *
 * @param {object} req - The current request object
 * @param {object} res - The result object
 * @param {Function} next - The next iteration middleware function
 * @returns {void}
 */
export function middlewareReact(req, res, next) {
    assert.object(req, 'req');
    assert.object(res, 'res');
    assert.optionalFunc(next, 'next');

    const store = configureStore();
    const acceptedLocale = getLocale(req, store);

    return loadData(req, store, acceptedLocale)
        .then((result) => {
            const rendered = render(req.url, store, result[0], result[1]);
            const redirectUrl = rendered.context.url;

            if (redirectUrl) {
                return res.redirect(res.status || 302, redirectUrl);
            }
            return res.status(200).send(`<!doctype html>${rendered.html}`);
        })
        .catch((reason) => {
            logger.warn(reason);
            const rendered = render(req.url, store);
            return res.status(404).send(`<!doctype html>${rendered.html}`);
        });
}
