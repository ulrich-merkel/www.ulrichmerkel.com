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
export const DIALOG_RESOURCE_NAME = 'dialog';

/**
 * @type {string}
 */
export const DIALOG_VISIBLE_CHANGE = `${DIALOG_RESOURCE_NAME}/DIALOG_VISIBLE_CHANGE`;

/**
 * @type {string}
 */
export const DIALOG_CONTENT_BROADCAST = 'DIALOG_CONTENT_BROADCAST';

/**
 * @type {string}
 */
export const DIALOG_CONTENT_SEARCH = 'DIALOG_CONTENT_SEARCH';

/**
 * @type {string}
 */
export const DIALOG_CONTENT_THEME = 'DIALOG_CONTENT_THEME';

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        visible: false,
        content: ''
    }
};
