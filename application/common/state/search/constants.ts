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
export const SEARCH_RESOURCE_NAME = 'search';

/**
 * @type {string}
 */
export const SEARCH_CHANGE_TERM = `${SEARCH_RESOURCE_NAME}/SEARCH_CHANGE_TERM`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        term: ''
    }
};
