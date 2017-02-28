/**
 * Es6 module for Redux Architecture.
 * Simple helper component to add utility functions.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 *
 * @TODO: Should be refactored and moved to actions
 *
 * @requires common/utils/validation
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { required, email } from './../../utils/validation';

/**
 * Validation helper to check all inputs.
 *
 * @function
 * @param {Object} [state={}] - The current redux contact state if given
 * @returns {Object} The validation status for all inputs as object
 */
function validate(state = {}) {
    return {
        name: required(state.name),
        email: required(state.email) && email(state.email),
        subject: required(state.subject),
        message: required(state.message)
    };
}

/**
 * Validation single or all input element(s), depending on parameter input.
 *
 * @function
 * @param {Object} state - The current redux contact state
 * @returns {boolean} The validation status
 */
function isValid(state) {
    const validated = validate(state);

    return !Object.keys(validated).some(function someKey(key) {
        return validated[key] !== undefined && !validated[key];
    });
}

export {
    validate,
    isValid
};
