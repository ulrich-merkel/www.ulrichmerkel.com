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
import { INITIAL_STATE, SEARCH_RESOURCE_NAME } from './constants';
import { SearchStateType } from './types';

/**
 * Select complete intl state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The intl state
 */
export const selectStateSearch = createSelector(
    [(state: RootState) => state?.[SEARCH_RESOURCE_NAME]],
    function resultFunc(search: SearchStateType): SearchStateType {
        return isEmpty(search) ? INITIAL_STATE : search;
    }
);

/**
 * Select search term state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The search term state
 */
export const selectStateSearchTerm = createSelector(
    [selectStateSearch],
    function resultFunc(search: SearchStateType): string {
        return get(search, 'payload.term', INITIAL_STATE.payload.term);
    }
);
