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
import produce, { Draft } from 'immer';
import { isEmpty } from 'lodash';
import {
    CONTACT_RESOURCE_NAME,
    CHANGE_CONTACT_FORM,
    INITIAL_STATE
} from './constants';
import { ContactStateType, ContactActionTypes, ContactFormType } from './types';

/**
 * Handle contact form values changes.
 *
 * @param {object} form - The contact form values
 * @returns {object} The redux action playload
 */
export function changeContactForm(form: ContactFormType): ContactActionTypes {
    return {
        type: CHANGE_CONTACT_FORM,
        form
    };
}

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @param {object} [state=INITIAL_STATE] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
export function reducer(
    state: ContactStateType = INITIAL_STATE,
    action: ContactActionTypes
): ContactStateType {
    return produce(state, function (draft: Draft<ContactStateType>) {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case CHANGE_CONTACT_FORM: {
                const { form } = action;
                if (isEmpty(form)) {
                    break;
                }

                draft.meta.isInitial = false;
                draft.payload.form = form;
                break;
            }
        }
    });
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
