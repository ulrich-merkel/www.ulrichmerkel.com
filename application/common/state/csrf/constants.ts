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
export const CSRF_RESOURCE_NAME = 'csrf';

/**
 * @type {string}
 */
export const CHANGE_CSRF_TOKEN = `${CSRF_RESOURCE_NAME}/CHANGE_CSRF_TOKEN`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
    }
};
