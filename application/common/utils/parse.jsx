/* eslint-disable import/prefer-default-export */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */

/**
 * Parse boolean values from string.
 *
 * @function
 * @param {string|boolean} [value=''] - The value to be checked
 * @param {*} [fallback] - The fallback value if the original one is not present
 * @returns {boolean|*} The parsed value or the provided fallback
 */
function toBoolean(value = '', fallback) {
    if (typeof value === 'boolean') {
        return value;
    }

    if (typeof value === 'string') {
        switch (value.toLowerCase()) {
        case 'true':
        case '1':
            return true;
        case 'false':
        case '0':
            return false;
        default:
            return fallback;
        }
    }

    return fallback;
}

export {
    toBoolean
};
