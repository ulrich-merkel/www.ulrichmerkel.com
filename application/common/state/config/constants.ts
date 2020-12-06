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
export const CONFIG_RESOURCE_NAME = 'config';

/**
 * @type {string}
 */
export const FETCH_CONFIG_CONTENT_REQUEST = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_CONTENT_REQUEST`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_CONTENT_FAILURE = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_CONTENT_FAILURE`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_CONTENT_SUCCESS = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_CONTENT_SUCCESS`;

/**
 * @type {string}
 */
export const CONFIG_CONTENT_ADD = `${CONFIG_RESOURCE_NAME}/CONFIG_CONTENT_ADD`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_TRANSLATION_REQUEST = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_TRANSLATION_REQUEST`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_TRANSLATION_FAILURE = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_TRANSLATION_FAILURE`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_TRANSLATION_SUCCESS = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_TRANSLATION_SUCCESS`;

/**
 * @type {string}
 */
export const CONFIG_TRANSLATION_ADD = `${CONFIG_RESOURCE_NAME}/CONFIG_TRANSLATION_ADD`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    content: {
        isFetching: false,
        didInvalidate: false
    }
};
