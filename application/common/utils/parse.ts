/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isBoolean, isString, isUndefined } from 'lodash';

/**
 * Parse boolean values from string, useful for gettting correct values
 * from config files.
 *
 * @param {string|boolean} [value] - The value to be checked
 * @param {boolean} [fallback] - The fallback if value is not parsable
 * @returns {boolean|undefined} The parsed value or undefined
 */
export function toBoolean(
    value?: string | boolean,
    fallback?: boolean
): boolean | undefined {
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
