/**
 * Es6 module for Redux Architecture.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/erikras/ducks-modular-redux}
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 */

/**
 * @type {string}
 */
export const SCROLL_RESOURCE_NAME = 'scroll';

/**
 * @type {string}
 */
export const SCROLL_HEADER_FIXED = `${SCROLL_RESOURCE_NAME}/SCROLL_HEADER_FIXED`;

/**
 * @type {string}
 */
export const SCROLL_HEADER_VISIBLE = `${SCROLL_RESOURCE_NAME}/SCROLL_HEADER_VISIBLE`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        isHeaderFixed: true,
        isHeaderVisible: true
    }
};
