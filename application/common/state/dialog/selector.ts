/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { createSelector } from 'reselect';
import { get, isEmpty } from 'lodash';

import { RootState } from '../root-reducer';
import { initialState, DIALOG_RESOURCE_NAME } from './duck';
import { DialogStateType } from './types';

/**
 * Select complete dialog state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The dialog state
 */
export const selectStateDialog = createSelector(
    [(state: RootState) => state?.[DIALOG_RESOURCE_NAME]],
    function resultFunc(dialog: DialogStateType): DialogStateType {
        return isEmpty(dialog) ? initialState : dialog;
    }
);

/**
 * Select dialog visible state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The dialog visiblity state
 */
export const selectStateDialogVisible = createSelector(
    [selectStateDialog],
    function resultFunc(dialog: DialogStateType): boolean {
        return get(dialog, 'payload.visible', initialState.payload.visible);
    }
);

/**
 * Select dialog visible state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The dialog visiblity state
 */
export const selectStateDialogContent = createSelector(
    [selectStateDialog],
    function resultFunc(dialog: DialogStateType): boolean {
        return get(dialog, 'payload.content', initialState.payload.content);
    }
);
