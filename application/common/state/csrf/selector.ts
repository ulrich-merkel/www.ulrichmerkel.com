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
import { INITIAL_STATE, CSRF_RESOURCE_NAME } from './constants';
import { CsrfStateType } from './types';

/**
 * Select complete csrf state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The csrf state
 */
export const selectStateCsrf = createSelector(
    [(state: RootState) => state?.[CSRF_RESOURCE_NAME]],
    function resultFunc(csrf: CsrfStateType): CsrfStateType {
        return isEmpty(csrf) ? INITIAL_STATE : csrf;
    }
);

/**
 * Select csrf token state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The csrf token state
 */
export const selectStateCsrfToken = createSelector(
    [selectStateCsrf],
    function resultFunc(csrf: CsrfStateType): string {
        return get(csrf, 'payload.token', INITIAL_STATE.payload.token);
    }
);
