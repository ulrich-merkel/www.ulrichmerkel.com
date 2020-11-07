/**
 * Es6 module for Redux Architecture.
 * Simple helper component to add utility functions.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 */
import { required, email } from '../../utils/validation';
import { isBrowser } from '../../utils/environment';
import { ContactFormType, ValidateType } from './types';

/**
 * Validation helper to check all inputs.
 *
 * @param {object} [contactForm] - The current redux contact state if given
 * @returns {object} The validation status for all inputs as object
 */
export function validate(contactForm: ContactFormType): ValidateType {
    return {
        name: required(contactForm?.name),
        email: required(contactForm?.email) && email(contactForm?.email),
        subject: required(contactForm?.subject),
        message: required(contactForm?.message)
    };
}

/**
 * Validation single or all input element(s), depending on parameter input.
 *
 * @param {object} [contactForm] - The current redux contact state
 * @returns {boolean} The validation status
 */
export function isValid(contactForm: ContactFormType): boolean {
    const validated = validate(contactForm);
console.log({validated, contactForm})
    return !Object.keys(validated).some(function someKey(key) {
        return validated[key] !== undefined && !validated[key];
    });
}

/**
 * Check if the form can be send.
 *
 * @param {object} [contactForm] - The current redux contact state
 * @returns {boolean} Whether the submit button is enabled or not
 */
export function canSendForm(contactForm: ContactFormType): boolean {
    const isStateValid = isValid(contactForm);

    return (
        isStateValid &&
        contactForm.pristine &&
        !contactForm.pending &&
        isBrowser(contactForm)
    );
}
