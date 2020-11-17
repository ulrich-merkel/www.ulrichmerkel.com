/* eslint-disable no-multi-assign */
/**
 * Es6 module for handling initial file loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isFunction } from 'lodash';
import constants from './constants';
import {
    createDomNode,
    getHeadDomNode,
    getFirstDomNodeByTagName
} from '../utils/dom';

const classNameLoaded = constants.IS_LAZY_LOADED;
const noop = Function.prototype;

/**
 * Check if param is a callable function and invoke it.
 *
 * @private
 * @param {Function} callback - The function to be checked
 * @param {*} [result] - The optional function parameter
 * @returns {void}
 */
function callFn(callback, result) {
    if (isFunction(callback)) {
        callback.call(result);
    }
}

/**
 * Append css files async.
 *
 * @see {@link https://github.com/ulrich-merkel/client-side-cache/}
 * @see {@link https://github.com/filamentgroup/loadCSS}
 *
 * @param {object} options - The loading options
 * @param {string} options.src - The css path to be loaded
 * @param {string} [options.className] - Additional className for the link element
 * @param {Function} [callback=noop] - The success/error handler for async loading
 * @returns {void}
 */
export function css(options, callback = noop) {
    const { className, id, src } = options;
    const headDomNode = getHeadDomNode();

    if (!src || !headDomNode) {
        return callFn(callback, false);
    }

    /**
     * Temporarily set media to something non-matching ('only x') to ensure
     * it'll fetch without blocking render
     */
    const styleDomNode = createDomNode('link', {
        className: []
            .concat(classNameLoaded, className)
            .filter(Boolean)
            .join(' '),
        disabled: 'disabled',
        href: src,
        id,
        media: 'only x',
        rel: 'stylesheet',
        type: 'text/css'
    });
    if (!styleDomNode) {
        return callFn(callback, false);
    }

    // Http loading starts here
    headDomNode.appendChild(styleDomNode);

    // Set media back to `all` so that the stylesheet applies once it loads
    setTimeout(function setTimeoutFn() {
        styleDomNode.media = 'all'; // eslint-disable-line immutable/no-mutation
        styleDomNode.removeAttribute('disabled');
        callFn(callback, true);
    });

    return null;
}

/**
 * Append javascript files async.
 *
 * @see {@link https://github.com/ulrich-merkel/client-side-cache/}
 * @see {@link https://github.com/filamentgroup/loadJS}
 *
 * @param {object} options - The loading options
 * @param {string} options.src - The javaScript path to be loaded
 * @param {string} [options.className] - Additional className for the script element
 * @param {Function} [callback=noop] - The success/error handler for async loading
 * @returns {void}
 */
export function js(options, callback = noop) {
    const { className, src } = options;
    const headDomNode = getHeadDomNode();
    const refDomNode = getFirstDomNodeByTagName('script');

    if (!src) {
        return callFn(callback, false);
    }

    /**
     * 'script's that are dynamically created and added to the document are async by default,
     * they don’t block rendering and execute as soon as they download.
     * We set this value here just to be sure it's async, but it's normally not neccesary.
     */
    const scriptDomNode = createDomNode('script', {
        async: 'true',
        className: []
            .concat(classNameLoaded, className)
            .filter(Boolean)
            .join(' '),
        src
    });
    if (!scriptDomNode) {
        return callFn(callback, false);
    }

    // Add script event listeners when loaded
    /* eslint-disable immutable/no-mutation, immutable/no-this */
    scriptDomNode.onreadystatechange = scriptDomNode.onload = function handleEvent() {
        if (
            !this.readyState ||
            this.readyState === 'complete' ||
            this.readyState === 'loaded'
        ) {
            // Avoid memory leaks in ie
            this.onreadystatechange = this.onload = this.onerror = null;
            callFn(callback, true);
        }
    };
    /* eslint-enable immutable/no-mutation, immutable/no-this */

    // Try to handle script errors
    /* eslint-disable immutable/no-mutation, immutable/no-this */
    scriptDomNode.onerror = function handleEvent() {
        // Avoid memory leaks in ie
        this.onreadystatechange = this.onload = this.onerror = null;
        callFn(callback, false);
    };
    /* eslint-enable immutable/no-mutation, immutable/no-this */

    // Start loading
    scriptDomNode.src = src; // eslint-disable-line immutable/no-mutation

    // Append script to according dom node
    if (refDomNode) {
        return refDomNode.parentNode.insertBefore(scriptDomNode, refDomNode);
    }
    return headDomNode.appendChild(scriptDomNode);
}
