/* eslint-disable import/first */
/**
 * Handle react client side rendering.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.5
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
 * @requires react-router-dom
 * @requires fastclick
 * @requires picturefill
 * @requires pubsub-js
 * @requires common/vendor/polyfill/base64
 * @requires common/vendor/polyfill/classList
 * @requires common/vendor/polyfill/console
 * @requires common/vendor/polyfill/CustomEvent
 * @requires common/vendor/polyfill/requestAnimationFrame
 * @requires common/vendor/standalone
 * @requires common/component/root
 * @requires common/component/routes
 * @requires common/state/configure-store
 * @requires common/config/application
 * @requires common/constants/theme
 * @requires client/feature-detect/feature-detect
 * @requires client/theme/apply-theme
 *
 * @changelog
 * - 0.0.5 Add PubSub due to decoupling
 * - 0.0.4 Switching to react-router@4
 * - 0.0.3 Adding history to get basename
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import '@babel/polyfill';
import '../common/vendor/polyfill/console';
import '../common/vendor/polyfill/requestAnimationFrame';
import '../common/vendor/polyfill/CustomEvent';
import '../common/vendor/polyfill/classList';
import '../common/vendor/polyfill/base64';
import '../common/vendor/standalone';

import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PubSub from 'pubsub-js';
import attachFastClick from 'fastclick';
import 'picturefill';

import Root from '../common/component/root';
import Routes from '../common/component/routes';
import configureStore from '../common/state/configure-store';
import { debug } from '../common/config/application';
import { DOM_ROOT_ELEMENT_ID } from '../common/constants/dom';
import { THEME_CHANGE_MESSAGE } from '../common/constants/theme';
import featureDetect from './feature-detect/feature-detect';
import applyTheme from './theme/apply-theme';

const mountNode = document.getElementById(DOM_ROOT_ELEMENT_ID);
const store = configureStore(window.__PRELOADED_STATE__); // eslint-disable-line no-underscore-dangle

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
 * @TODO Remove addEventListener and use something better suited for react
 *
 * @see {@link http://stackoverflow.com/questions/24335821/can-i-fastclick-reactjs-running-in-cordova}
 * @see {@link https://github.com/reactjs/react-router/issues/714}
 */
document.addEventListener(
    'DOMContentLoaded',
    function handleEvent() {
        attachFastClick.attach(document.body);
    },
    false
);

/**
 * Add pubsub messaging to decouple common and client code for adding theming.
 *
 * @see {@link https://github.com/mroderick/PubSubJS}.
 */
PubSub.subscribe(THEME_CHANGE_MESSAGE, function subscribeApplyTheme(
    message,
    theme
) {
    applyTheme(theme);
});

/**
 * Helper functionto be able to pass props to the children page component.
 *
 * @see {@link https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md}
 * @see {@link https://github.com/reactjs/react-router/issues/3183}
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17}
 *
 * @private
 * @param {object} Component - The current router react component
 * @param {object} props - The current react component props
 * @returns {ReactElement} React component markup
 */
function createElement(Component, props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
}

/**
 * Render page component accoringly to dom element basid on given location.
 */
hydrate(
    <Root store={store}>
        <BrowserRouter basename="/" {...{ createElement }}>
            <Routes />
        </BrowserRouter>
    </Root>,
    mountNode
);
