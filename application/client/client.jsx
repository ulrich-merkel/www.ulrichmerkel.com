/* eslint-disable import/first */
/**
 * Handle react client side rendering.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @see {@link https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes/blob/master/modules/client.js}
 * @see {@link https://github.com/reactjs/react-router/issues/3183}
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/client/index.js}
 *
 * @requires babel-polyfill
 * @requires react
 * @requires react-dom
 * @requires react-router
 * @requires history
 * @requires fastclick
 * @requires picturefill
 * @requires common/vendor/polyfill/base64
 * @requires common/vendor/polyfill/classList
 * @requires common/vendor/polyfill/console
 * @requires common/vendor/polyfill/CustomEvent
 * @requires common/vendor/polyfill/requestAnimationFrame
 * @requires common/vendor/standalone
 * @requires common/config/routes
 * @requires common/config/application
 * @requires common/utils/scroll-to
 * @requires common/utils/logger
 * @requires common/component/root
 * @requires common/state/configure-store
 * @requires client/feature-detect/feature-detect
 *
 * @changelog
 * - 0.0.3 Adding history to get basename
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import 'babel-polyfill';
import '../common/vendor/polyfill/console';
import '../common/vendor/polyfill/requestAnimationFrame';
import '../common/vendor/polyfill/CustomEvent';
import '../common/vendor/polyfill/classList';
import '../common/vendor/polyfill/base64';
import '../common/vendor/standalone';

import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory, match } from 'react-router';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';

import attachFastClick from 'fastclick';
import 'picturefill';

import featureDetect from './feature-detect/feature-detect';
import configRoutes from '../common/config/routes';
import { debug } from '../common/config/application';
import scrollTo, { getPageOffset } from '../common/utils/scroll-to';
import logger from '../common/utils/logger';
import Root from '../common/component/root';
import configureStore from '../common/state/configure-store';

/* eslint-disable no-unused-vars */
const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;
const mountNode = document.getElementById('l-react');
/* eslint-enable no-unused-vars */

if (debug) {
    // Enable debugger ror chrome dev tool support
    window.React = React; // eslint-disable-line immutable/no-mutation
}

featureDetect();

/**
 * Add fastclick mobile helper. The implementation is a bit
 * off standard, but this seems to work here...
 *
 * Because we're using Browserify module system, the FastClick.attach
 * function will be returned when we call require('fastclick').
 *
 * @TODO: Remove addEventListener and use something better suited for react
 *
 * @see {@link http://stackoverflow.com/questions/24335821/can-i-fastclick-reactjs-running-in-cordova}
 * @see {@link https://github.com/reactjs/react-router/issues/714}
 */
document.addEventListener('DOMContentLoaded', function handleEvent() {
    attachFastClick(document.body);
}, false);

/**
 * Helper function to pass props to children components.
 *
 * @see {@link https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md}
 *
 * @function
 * @private
 * @param {Object} Component - The current router react component
 * @param {Object} props - The current react component props
 * @returns {React.Element} React component markup
 */
function createElement(Component, props) {
    return <Component {...props} />;
}

/**
 * Adjusting routing with a basename to enable correct routing from
 * a subdirectory. This is important if we want to link to '/subpage-b/foo'
 * but are already located in '/subpage-a/' to ensure we don't end up
 * in '/subpage-a/subpage-b/foo'.
 *
 * @type {Object}
 * @see {@link https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#customize-your-history-further}
 */
const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});

/**
 * Scroll to top after page changed
 *
 * @see {@link https://github.com/reactjs/react-router/issues/2144#issuecomment-150939358}
 * @param {Object} currentLocation
 * @listens browserHistory
 */
browserHistory.listen(function handleListen(currentLocation) {

    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(function handleSetTimeout() {

        /**
         * Keep default behavior of restoring scroll position when user:
         * - clicked back button
         * - clicked on a link that programmatically calls `history.goBack()`
         * - manually changed the URL in the address bar (here we might want
         *   to scroll to top, but we can't differentiate it from the others)
         */
        if (currentLocation.action === 'POP') {
            return;
        }

        /**
         * In all other cases, scroll to top, make sure the page is already scrolled
         * @see {@link https://developer.mozilla.org/de/docs/Web/API/Window/scrollY}
         */
        if (getPageOffset()) {
            scrollTo({
                top: 0
            });
        }

    }, 0);

});

/**
 * Render page component accoring to given location
 * calling `match` is simply for side effects of
 * loading route/component code for the initial location
 */
match({ routes: configRoutes, location }, function handleMatch(error, redirectLocation, renderProps) {
    if (error) {
        logger.warn(error);
        return;
    }

    if (redirectLocation) {
        window.location.pathname = redirectLocation.pathname; // eslint-disable-line immutable/no-mutation
        return;
    }

    if (renderProps) {

        // initialize redux store, combining single stores into a global one
        const store = configureStore(window.__PRELOADED_STATE__); // eslint-disable-line no-underscore-dangle

        render(

            /**
             * Using createElement function here to be able to
             * pass props to the page Component
             *
             * @see {@link https://github.com/reactjs/react-router/issues/3183}
             * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17}
             */
            <Root store={store}>
                <Router
                    routes={configRoutes}
                    history={browserHistory}
                    createElement={createElement}
                />
            </Root>,
            mountNode

        );
    }

});
