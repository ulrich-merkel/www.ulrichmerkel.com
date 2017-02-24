/* eslint-disable immutable/no-this */
/* global picturefill */
/**
 * Es6 module for handling translation data.
 * Higher-Order Components (HOCs) and decorators are JavaScript functions
 * which add functionality to existing component classes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires react
 * @requires picturefill
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import React, { Component } from 'react';

/**
 * Helper function to init picture element polyfill.
 *
 * @see {@link http://scottjehl.github.io/picturefill/}
 *
 * @function
 * @private
 * @returns {void}
 */
function initPicturefill() {

    // could be undefined e.g. in test files
    if (typeof picturefill === 'undefined') {
        return;
    }

    /**
     * For olders versions of picturefill the global pictureFill reference will be undefined for
     * browsers supporting <picture> natively. In newer versions (>= 3) pictureFill is exporting
     * a noop function to avoid checks for undefined.
     * Use setTimeout hack to make sure this runs after React Router's own listener.
     *
     * `picturefill` needs to be globally available here to make this work without errors
     * (is included in main client file).
     */
    setTimeout(() => {
        picturefill();
    });

}

/**
 * The pictureFill higher order function handling responsive images.
 *
 * @function
 * @param {React.Element} SourceComponent - The react component to be decorated
 * @returns {React.Element}
 */
function pictureFill(SourceComponent) {

    /**
     * Wrapper class to call initPicturefill on mount and on updates.
     *
     * @class
     * @extends React.Component
     */
    return class PictureFill extends Component {

        /**
         * Invoked once, only on the client (not on the server),
         * immediately after the initial rendering occurs.
         *
         * @function
         * @returns {void}
         */
        componentDidMount() {
            initPicturefill();
        }

        /**
         * Invoked immediately after the component's updates are flushed to the DOM.
         * This method is not called for the initial render.
         *
         * @function
         * @returns {void}
         */
        componentDidUpdate() {
            initPicturefill();
        }

        /**
         * The required render function to return a single react child element.
         *
         * @function
         * @returns {React.Element} React component markup
         */
        render() {
            return <SourceComponent {...this.props} />;
        }

    };

}

export default pictureFill;
