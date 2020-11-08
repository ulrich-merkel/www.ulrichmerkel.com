/* eslint-disable no-useless-escape, no-control-regex */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/erikras/react-redux-universal-hot-example}
 */
import { isNil } from 'lodash';

/**
 * Helper function to check if value is valid.
 *
 * @param {string} value - The value to be checked
 * @returns {boolean} Whether the value is valid or not
 */
export function isValidValue(value: string): boolean {
    return !isNil(value) && value !== '';
}

/**
 * Validate email helper.
 *
 * @see {@link https://www.w3resource.com/javascript/form/email-validation.php}
 *
 * @param {string} value - The value to be checked
 * @returns {boolean} Whether the value is a valid email or not
 */
export function email(value: string): boolean {
    /* eslint-disable security/detect-unsafe-regex, max-len */
    if (
        isValidValue(value) &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value
        )
    ) {
        return true;
    }
    /* eslint-enable security/detect-unsafe-regex, max-len */

    return false;
}

/**
 * Validate required helper.
 *
 * @param {string} value - The value to be checked
 * @returns {boolean} Whether the value is empty/set or not
 */
export function required(value: string): boolean {
    if (!isValidValue(value)) {
        return false;
    }
    return true;
}
