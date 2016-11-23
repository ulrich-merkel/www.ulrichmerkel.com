/**
 * Es6 module for react server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires react
 * @requires react-dom
 * @requires react-router
 * @requires lodash
 * @requires common/config/application
 * @requires common/config/routes
 * @requires common/utils/logger
 * @requires common/utils/read-file
 * @requires common/component/root
 * @requires common/component/layout/html
 * @requires common/component/page/not-found
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
 * - 0.0.3 Adjusted async rendering
 * - 0.0.2 Moved code to es6
 * - 0.0.1 Basic functions and structure
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import { get } from 'lodash';

import configApplication from './../../common/config/application';
import configRoutes from './../../common/config/routes';
import logger from './../../common/utils/logger';
import { readFile } from './../../common/utils/read-file';
import Root from './../../common/component/root';
import LayoutHtml from './../../common/component/layout/html';
import PageNotFound from './../../common/component/page/not-found';
import configureStore from './../../common/state/configure-store';
import { changeLocale } from './../../common/state/intl/actions';
import { fetchConfigContentIfNeeded, fetchConfigTranslationIfNeeded } from './../../common/state/config/actions';
import { addToken } from './../../common/state/csrf/actions';

const { aboveTheFold } = configApplication;

/**
 * Helper function to pass props to children components.
 *
 * @function
 * @private
 * @param {Object} Component The current router react component
 * @param {Object} props The current react component props
 * @returns {React.Element} React component markup
 */
function createElement(Component, props) {
    return <Component {...props} />;
}

/**
 * Using createElement function here to be able to
 * pass props to the page Component
 *
 * @see {@link https://github.com/reactjs/react-router/issues/3183}
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17}
 * @see {@link https://github.com/ReactTraining/react-router/issues/902}
 *
 * @function
 * @private
 * @param {Object} store The created redux store
 * @param {Object} renderProps The component properties to be rendered
 * @param {string} [cssBase=''] The file contents from base.css
 * @param {string} [scriptLoader=''] The file contents from loader.js
 * @returns {void}
 */
function getHtml(store, renderProps, cssBase = '', scriptLoader = '') {
    return renderToStaticMarkup(
        <Root store={store}>
            <LayoutHtml {... { store, cssBase, scriptLoader }}>
                <RouterContext
                    {...renderProps}
                    createElement={createElement}
                />
            </LayoutHtml>
        </Root>
    );
}

/**
 * Handle react server rendering and react routering.
 *
 * @function
 * @param {Object} req The current request object
 * @param {Object} res The result object
 * @returns {void}
 */
function middlewareReact(req, res, next) {

    /**
     * Using the new match function instead of Router.run
     *
     * Note that req.url here should be the full URL path from
     * the original request, including the query string.
     *
     * @see {@link https://github.com/reactjs/react-router/blob/1.0.x/docs/guides/advanced/ServerRendering.md}
     * @see {@link https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md}
     */
    match({
        routes: configRoutes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {

        if (error) {
            return res.status(error.status || 500).send(error.message).end();
        }

        if (redirectLocation) {
            return res.redirect(res.status || 302, `${redirectLocation.pathname}${redirectLocation.search}`);
        }

        if (renderProps) {

            // Initialize redux store, combining single stores into a global one
            const store = configureStore();

            /**
             * Read language which is given in the url locale parameter or via
             * express middleware and store the selection in redux
             */
            const urlLocale = get(renderProps, 'router.params.locale', '');
            store.dispatch(changeLocale([urlLocale, urlLocale.toUpperCase()].join('-'), req.language));
            const acceptedLocale = get(store.getState(), 'intl.locale');

            /**
             * We check renderProps.components (or renderProps.routes) for
             * the "not found" component or route respectively, and send a 404 as
             * below, because we're using a catch-all error route in the router
             * config.
             *
             * @see {@link https://github.com/ReactTraining/react-router/issues/2834}
             */
            const statusCode = get(renderProps, 'components', []).indexOf(PageNotFound) !== -1 ? 404 : 200;

            /**
             * Load all required data async via promises to
             * improve the overall node performance.
             */
            return Promise.all([
                readFile(aboveTheFold.baseCss),
                readFile(aboveTheFold.loaderBundle),
                store.dispatch(fetchConfigContentIfNeeded()),
                store.dispatch(fetchConfigTranslationIfNeeded(acceptedLocale)),
                store.dispatch(addToken(req.csrfToken && req.csrfToken()))
            ]).then((result) => {
                return res
                    .status(statusCode)
                    .send(`<!doctype html>${getHtml(store, renderProps, result[0], result[1])}`);
            }).catch((reason) => {
                logger.warn(reason);
                return res
                    .status(statusCode)
                    .send(`<!doctype html>${getHtml(store, renderProps)}`);
            });

        }

        return next();

    });
}

export default middlewareReact;
