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
import { ContactStateType, ContactActionTypes } from './types';

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
export const initialState: ContactStateType = {
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

/**
 * Handle contact form values changes.
 *
 * @param {object} form - The contact form values
 * @returns {object} The redux action playload
 */
export function changeContactForm(
    form: Record<string, unknown>
): ContactActionTypes {
    return {
        type: CHANGE_CONTACT_FORM,
        form
    };
}

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @param {object} [state=initialState] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
export function reducer(
    state: ContactStateType = initialState,
    action: ContactActionTypes
): ContactStateType {
    switch (action.type) {
        case CHANGE_CONTACT_FORM: {
            const form = action.form || {};
            return {
                meta: {
                    ...state.meta,
                    isInitial: false
                },
                payload: {
                    ...state.payload,
                    form
                }
            };
        }
        default: {
            return state;
        }
    }
}

/**
 * Convinient helper to export the reducer with
 * the corresponding redux store resource object key.
 *
 * @type {Object}
 */
export const reducerContact = {
    [CONTACT_RESOURCE_NAME]: reducer
};
