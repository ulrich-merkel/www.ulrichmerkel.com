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
export const REDUCED_MOTION_RESOURCE_NAME = 'reducedMotion';

/**
 * @type {string}
 */
export const REDUCED_MOTION_TOGGLE_SELECTED = `${REDUCED_MOTION_RESOURCE_NAME}/REDUCED_MOTION_TOGGLE_SELECTED`;

/**
 * @type {enum}
 */
export const AVAILABLE_MOTION_PREFERENCES = {
    NO_PREFERENCE: 'no-preference',
    REDUCE: 'reduce'
};

/**
 * Define pubsub message name for theme change.
 *
 * @type {string}
 */
export const PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE = `${REDUCED_MOTION_RESOURCE_NAME}/REDUCED_MOTION_CHANGE_MESSAGE`;

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
