/**
 * Es6 module for Redux Architecture.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/erikras/ducks-modular-redux}
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 */

/**
 * @type {string}
 */
export const CONTACT_RESOURCE_NAME = 'contact';

/**
 * @type {string}
 */
export const CHANGE_CONTACT_FORM = `${CONTACT_RESOURCE_NAME}/CHANGE_CONTACT_FORM`;

/**
 * @type {object}
 */
export const INITIAL_STATE = {
    meta: {
        isInitial: true
    },
    payload: {
        form: {
            name: '',
            email: '',
            subject: '',
            message: '',
            pristine: false,
            namePristine: false,
            emailPristine: false,
            subjectPristine: false,
            messagePristine: false,
            pending: false,
            success: false,
            error: false
        }
    }
};
