/**
 * Es6 module for handling initial file loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import constants from './constants';
import {
    createDomNode,
    getHeadDomNode,
    getFirstDomNodeByTagName
} from './../utils/dom';

const classNameLoaded = constants.IS_LAZY_LOADED;

/**
 * Append css files async.
 *
 * @see {@link https://github.com/ulrich-merkel/client-side-cache/}
 * @see {@link https://github.com/filamentgroup/loadCSS}
 *
 * @function
 * @param {string} src The css path to be loaded
 * @param {Function} [callback] The success/error handler for async loading
 * @returns {void}
 */
function css(src, callback = Function.prototype) {

    const headDomNode = getHeadDomNode();

    if (!src || !headDomNode) {
        return callback.call(false);
    }

    /**
     * Temporarily set media to something non-matching ('only x') to ensure
     * it'll fetch without blocking render
     */
    const styleDomNode = createDomNode('link', {
        rel: 'stylesheet',
        type: 'text/css',
        className: classNameLoaded,
        href: src,
        media: 'only x',
        disabled: 'disabled'
    });
    if (!styleDomNode) {
        return null;
    }

    // Http loading starts here
    headDomNode.appendChild(styleDomNode);

    // Set media back to `all` so that the stylesheet applies once it loads
    setTimeout(function handleSetTimeout() {
        styleDomNode.media = 'all';
        styleDomNode.removeAttribute('disabled');
        callback.call(true);
    });

    return null;

}

/**
 * Append javascript files async.
 *
 * @see {@link https://github.com/ulrich-merkel/client-side-cache/}
 * @see {@link https://github.com/filamentgroup/loadJS}
 *
 * @function
 * @param {string} src The css path to be loaded
 * @param {Function} [callback] The success/error handler for async loading
 * @returns {void}
 */
function js(src, callback = Function.prototype) {

    const headDomNode = getHeadDomNode();
    const refDomNode = getFirstDomNodeByTagName('script');

    if (!src) {
        callback.call(false);
        return;
    }

    /**
     * 'script's that are dynamically created and added to the document are async by default,
     * they don’t block rendering and execute as soon as they download.
     * We set this value here just to be sure it's async, but it's normally not neccesary.
     */
    const scriptDomNode = createDomNode('script', {
        async: 'true',
        className: classNameLoaded,
        src
    });
    if (!scriptDomNode) {
        callback.call(false);
        return;
    }

    // Add script event listeners when loaded
    scriptDomNode.onreadystatechange = scriptDomNode.onload = function handleEvent() {
        if (!this.readyState || this.readyState === 'complete' || this.readyState === 'loaded') {

            // avoid memory leaks in ie
            this.onreadystatechange = this.onload = this.onerror = null;
            callback.call(true);

        }
    };

    // Try to handle script errors
    scriptDomNode.onerror = function handleEvent() {

        // avoid memory leaks in ie
        this.onreadystatechange = this.onload = this.onerror = null;
        callback.call(false);

    };

    // Start loading
    scriptDomNode.src = src;

    // Append script to according dom node
    if (refDomNode) {
        refDomNode.parentNode.insertBefore(scriptDomNode, refDomNode);
        return;
    }
    headDomNode.appendChild(scriptDomNode);

}

export default {
    css,
    js
};
