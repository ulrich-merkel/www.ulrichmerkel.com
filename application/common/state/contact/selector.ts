/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 * @version 0.0.1
 */
import { createSelector } from 'reselect';
import { get, isEmpty } from 'lodash';

import { RootState } from '../root-reducer';
import { INITIAL_STATE, CONTACT_RESOURCE_NAME } from './constants';
import { ContactStateType } from './types';

/**
 * Select complete contact state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The contact state
 */
export const selectStateContact = createSelector(
    [(state: RootState) => state?.[CONTACT_RESOURCE_NAME]],
    function resultFunc(contact: ContactStateType): ContactStateType {
        return isEmpty(contact) ? INITIAL_STATE : contact;
    }
);

/**
 * Select contact form state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The contact form state
 */
export const selectStateContactForm = createSelector(
    [selectStateContact],
    function resultFunc(contact: ContactStateType): string {
        return get(contact, 'payload.form', INITIAL_STATE.payload.form);
    }
);
