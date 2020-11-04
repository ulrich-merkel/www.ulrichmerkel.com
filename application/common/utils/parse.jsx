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
 * @requires lodash
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { isBoolean, isString, isUndefined } from 'lodash';

/**
 * Parse boolean values from string.
 *
 * @function
 * @param {string|boolean} [value=''] - The value to be checked
 * @param {boolean} [fallback] - The fallback if value is not parsable
 * @returns {boolean|undefined} The parsed value or undefined
 */
function toBoolean(value = '', fallback) {
    if (isBoolean(value)) {
        return value;
    }

    const fallbackReturn =
        !isUndefined(fallback) && isBoolean(fallback) ? fallback : undefined;

    if (isString(value)) {
        switch (value.toLowerCase()) {
            case 'true':
            case '1':
                return true;
            case 'false':
            case '0':
                return false;
            default:
                return fallbackReturn;
        }
    }

    return fallbackReturn;
}

export { toBoolean };
