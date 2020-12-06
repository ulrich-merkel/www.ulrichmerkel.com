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
export const PAGE_RESOURCE_NAME = 'page';

/**
 * @type {string}
 */
export const PAGE_INCREASE_VIEWS = `${PAGE_RESOURCE_NAME}/PAGE_INCREASE_VIEWS`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        viewsAfterReload: 0
    }
};
