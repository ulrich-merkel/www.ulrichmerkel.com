/* eslint-disable no-multi-assign */
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
import { createDomNode, getHeadDomNode } from '../utils/dom';
import { CLASSNAME_IS_LAZY_LOADED } from './constants';

type CssOptions = {
    className?: string;
    id?: string;
    src?: string;
};

type Callback = () => void;

/**
 * Temporarily set media to something non-matching ('only x') to ensure
 * it'll fetch without blocking render.
 *
 * @param {object} options - The loading options
 * @returns {object} The generated style element
 */
export function createStyleElement(options: CssOptions): HTMLStyleElement {
    const { className, id, src } = options;

    return createDomNode('link', {
        className: []
            .concat(CLASSNAME_IS_LAZY_LOADED, className)
            .filter(Boolean)
            .join(' '),
        disabled: 'disabled',
        href: src,
        id,
        media: 'only x',
        rel: 'stylesheet',
        type: 'text/css'
    });
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
export function loadCss(options: CssOptions, callback: Callback = noop): void {
    if (isEmpty(options)) {
        return;
    }

    const { src } = options;
    const headDomNode = getHeadDomNode();

    if (!isValidString(src) || !headDomNode) {
        callFn(callback, false);
        return;
    }

    const styleDomNode = createStyleElement(options);
    if (!styleDomNode) {
        callFn(callback, false);
        return;
    }

    // Http loading starts here.
    headDomNode.appendChild(styleDomNode);

    // Set media back to `all` so that the stylesheet applies once it loads.
    setTimeout(function setTimeoutFn() {
        styleDomNode.setAttribute('media', 'all');
        styleDomNode.removeAttribute('disabled');
        callFn(callback, true);
    });
}
