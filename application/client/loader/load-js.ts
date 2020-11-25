/**
 * Es6 module for handling initial file loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isEmpty, noop } from 'lodash';

import { callFn } from '../../common/utils/function';
import { isValidString } from '../../common/utils/string';
import {
    createDomNode,
    getHeadDomNode,
    getFirstDomNodeByTagName
} from '../utils/dom';
import { CLASSNAME_IS_LAZY_LOADED } from './constants';

type JsOptions = {
    className: string;
    id: string;
    src: string;
};

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
export function loadJs(options: JsOptions, callback = noop) {
    if (isEmpty(options)) {
        return;
    }

    const { className, id, src } = options;
    const headDomNode = getHeadDomNode();
    const refDomNode = getFirstDomNodeByTagName('script');

    if (!isValidString(src) || !headDomNode) {
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
            .concat(CLASSNAME_IS_LAZY_LOADED, className)
            .filter(Boolean)
            .join(' '),
        id,
        src: ''
    });
    if (!scriptDomNode) {
        return callFn(callback, false);
    }

    // Add script event listeners when loaded.
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

    // Try to handle script errors.
    /* eslint-disable immutable/no-mutation, immutable/no-this */
    scriptDomNode.onerror = function handleEvent() {
        // Avoid memory leaks in ie
        this.onreadystatechange = this.onload = this.onerror = null;
        callFn(callback, false);
    };
    /* eslint-enable immutable/no-mutation, immutable/no-this */

    // Start loading.
    scriptDomNode.src = src; // eslint-disable-line immutable/no-mutation

    // Append script to according dom node.
    if (refDomNode) {
        return refDomNode.parentNode.insertBefore(scriptDomNode, refDomNode);
    }
    return headDomNode.appendChild(scriptDomNode);
}
