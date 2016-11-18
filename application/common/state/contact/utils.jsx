/**
* Es6 module for helper component.
*
* @file
*
* @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
* @version 0.0.1
*
* @changelog
* - 0.0.1 basic function and structure
*/
import { required, email } from './../../utils/validation';

/**
 * Validation helper to check all inputs.
 *
 * @function
 * @returns {object} The validation status for all inputs as object
 */
export const validate = (state = {}) => {
    return {
        name: required(state.name),
        email: required(state.email) && email(state.email),
        subject: required(state.subject),
        message: required(state.message)
    };
};

/**
 * Validation single or all input element(s), depending on parameter input.
 *
 * @function
 * @param {string} [name] The optional input name to be validated
 * @returns {boolean} The validation status
 */
export const isValid = (state) => {

    const validated = validate(state);
    let result = true;

    // @see {@link https://esdiscuss.org/topic/es6-iteration-over-object-values}
    Object.keys(validated).forEach((key) => {
        if (validated[key] !== undefined && !validated[key]) {
            result = false;
        }
    });

    return result;

};
