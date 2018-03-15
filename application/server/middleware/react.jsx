/**
 * Es6 module for react server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.6
 *
 * @requires react
 * @requires react-dom
 * @requires react-router
 * @requires lodash
 * @requires assert-plus
 * @requires common/config/application
 * @requires common/utils/logger
 * @requires common/utils/read-file
 * @requires common/component/root
 * @requires common/component/layout/html
 * @requires common/state/configure-store
 * @requires common/state/config/actions
 * @requires common/state/intl/actions
 * @requires common/state/csrf/actions
 *
 * @see {@link https://github.com/reactjs/react-router/blob/1.0.x/docs/guides/advanced/ServerRendering.md}
 * @see {@link https://github.com/reactjs/react-router/issues/1990}
 * @see {@link https://www.youtube.com/watch?v=PnpfGy7q96U}
 * @see {@link https://github.com/reactjs/redux/issues/723}
 *
 * @changelog
 * - 0.0.6 Switching to react-router@4
 * - 0.0.5 Add assert-plus as function parameter checker
 * - 0.0.4 Improve error handling and above the fold files
 * - 0.0.3 Adjusted async rendering
 * - 0.0.2 Moved code to es6
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { get } from 'lodash';
import assert from 'assert-plus';

import configApplication from '../../common/config/application';
import logger from '../../common/utils/logger';
import { readFile } from '../../common/utils/read-file';
import Root from '../../common/component/root';
import Routes from '../../common/component/routes';
import LayoutHtml from '../../common/component/layout/html';
import configureStore from '../../common/state/configure-store';
import { changeLocale } from '../../common/state/intl/actions';
import { fetchConfigContentIfNeeded, fetchConfigTranslationIfNeeded } from '../../common/state/config/actions';
import { addToken } from '../../common/state/csrf/actions';

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
 * @param {Object} store - The created redux store
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
            <Root store={store}>
                <LayoutHtml {... { store, cssBase, scriptBootstrap }}>
                    <StaticRouter
                        context={context}
                        location={url}
                    >
                        <Routes />
                    </StaticRouter>
                </LayoutHtml>
            </Root>
        ),
        context: context
    };
}

/**
 * Read language which is given in the url locale parameter or via
 * express middleware and store the selection in redux.
 *
 * @private
 * @param {Object} req - The current request object
 * @param {Object} store - The complete redux store
 * @returns {string} The currently accepted locale
 */
function getLocale(req, store) {
    assert.object(req, 'req');
    assert.object(store, 'store');

    // @TODO: Read locale from router params
    const urlLocale = get({}, 'router.params.locale', '');
    store.dispatch(changeLocale([
        urlLocale,
        urlLocale.toUpperCase()
    ].join('-'), req.language));
    const acceptedLocale = get(store.getState(), 'intl.locale');

    return acceptedLocale;
}

/**
 * Load all required data async via promises to
 * improve the overall node performance.
 *
 * @private
 * @param {Object} req - The current request object
 * @param {Object} store - The complete redux store
 * @param {string} acceptedLocale - The currently accepted locale
 * @returns {Promise} Async state when initial data is loaded
 */
function loadData(req, store, acceptedLocale) {
    assert.object(req, 'req');
    assert.object(store, 'store');
    assert.string(acceptedLocale, 'acceptedLocale');
    const { dispatch } = store

    return Promise.all([
        readFile(aboveTheFold.cssBase),
        readFile(aboveTheFold.scriptBootstrap),
        dispatch(fetchConfigContentIfNeeded()),
        dispatch(fetchConfigTranslationIfNeeded(acceptedLocale)),
        dispatch(addToken(req.csrfToken && req.csrfToken()))
    ]);
}

/**
 * Handle react server rendering and react routering.
 *
 * @param {Object} req - The current request object
 * @param {Object} res - The result object
 * @param {Function} next - The next iteration middleware function
 * @returns {void}
 */
function middlewareReact(req, res, next) {
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
            return res
                .status(200)
                .send(`<!doctype html>${rendered.html}`);
        })
        .catch((reason) => {
            logger.warn(reason);
            const rendered = render(req.url, store);
            return res
                .status(404)
                .send(`<!doctype html>${rendered.html}`);
        });
}

export default middlewareReact;
