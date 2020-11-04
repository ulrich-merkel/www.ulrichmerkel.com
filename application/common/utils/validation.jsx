/* eslint-disable no-useless-escape, no-control-regex */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://github.com/erikras/react-redux-universal-hot-example}
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */

/**
 * Helper function to check if value is empty.
 *
 * @function
 * @private
 * @param {string} value - The value to be checked
 * @returns {boolean} Whether the value is empty or not
 */
function isEmpty(value) {
    return value === undefined || value === null || value === ''; // eslint-disable-line lodash/prefer-is-nil
}

/**
 * Validate email helper.
 *
 * @function
 * @param {string} value - The value to be checked
 * @returns {boolean} Whether the value is a valid email or not
 */
function email(value) {
    // eslint-disable-next-line security/detect-unsafe-regex
    if (
        !isEmpty(value) &&
        !/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(
            value
        )
    ) {
        // eslint-disable-line max-len
        return false;
    }
    return true;
}

/**
 * Validate required helper.
 *
 * @function
 * @param {string} value - The value to be checked
 * @returns {boolean} Whether the value is empty/set or not
 */
function required(value) {
    if (isEmpty(value)) {
        return false;
    }
    return true;
}

export { email, required };
