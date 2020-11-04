/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link http://josdejong.com/blog/2015/03/28/a-broader-view-on-isomorphic-javascript/}
 * @see {@link https://github.com/sospedra/logatim/blob/master/lib/utils.js}
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */

/**
 * Check if current environment is browser.
 *
 * @function
 * @returns {boolean}
 */
function isBrowser() {
    return typeof window !== 'undefined';
}

/**
 * Check if current environment is node.
 *
 * @function
 * @returns {boolean}
 */
function isNode() {
    return typeof window === 'undefined' && typeof process !== 'undefined';
}

export { isBrowser, isNode };
