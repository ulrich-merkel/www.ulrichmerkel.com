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
 * @TODO Should be refactored and moved to actions
 *
 * @requires common/utils/validation
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { required, email } from '../../utils/validation';
import { isBrowser } from '../../utils/environment';

/**
 * Validation helper to check all inputs.
 *
 * @function
 * @param {object} [state={}] - The current redux contact state if given
 * @returns {object} The validation status for all inputs as object
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
 * @param {object} state - The current redux contact state
 * @returns {boolean} The validation status
 */
function isValid(state) {
    const validated = validate(state);

    return !Object.keys(validated).some(function someKey(key) {
        return validated[key] !== undefined && !validated[key];
    });
}

function canSendForm(state) {
    const isStateValid = isValid(state);

    return isStateValid
        && state.pristine
        && !state.pending
        && isBrowser(state);
}

export {
    canSendForm,
    isValid,
    validate
};
