/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://josdejong.com/blog/2015/03/28/a-broader-view-on-isomorphic-javascript/}
 * @see {@link https://github.com/sospedra/logatim/blob/master/lib/utils.js}
 */

/**
 * Check if current environment is browser.
 *
 * @returns {boolean} Whether the application is running in browser
 */
export function isBrowser(): boolean {
    return typeof window !== 'undefined';
}

/**
 * Check if current environment is node.
 *
 * @returns {boolean} Whether the application is running in node
 */
export function isNode(): boolean {
    return typeof window === 'undefined' && typeof process !== 'undefined';
}
