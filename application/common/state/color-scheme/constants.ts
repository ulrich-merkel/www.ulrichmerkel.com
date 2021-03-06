/**
 * Es6 module for Redux Architecture.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */

/**
 * @type {string}
 */
export const COLOR_SCHEME_RESOURCE_NAME = 'colorScheme';

/**
 * @type {string}
 */
export const COLOR_SCHEME_TOGGLE_SELECTED = `${COLOR_SCHEME_RESOURCE_NAME}/COLOR_SCHEME_TOGGLE_SELECTED`;

/**
 * @type {string}
 */
export const COLOR_SCHEME_TOGGLE_SELECTED_SAGA = `${COLOR_SCHEME_RESOURCE_NAME}/COLOR_SCHEME_TOGGLE_SELECTED_SAGA`;

/**
 * @type {enum}
 */
export const AVAILABLE_COLOR_SCHEMES = {
    DARK: 'dark',
    LIGHT: 'light'
};

/**
 * Define pubsub message name for theme change.
 *
 * @type {string}
 */
export const PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE = `${COLOR_SCHEME_RESOURCE_NAME}/COLOR_SCHEME_CHANGE_MESSAGE`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        selected: undefined
    }
};
