/* eslint-disable import/prefer-default-export, arrow-parens */
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

import { initialState, SEARCH_RESOURCE_NAME } from './duck';
import { SearchStateType } from './types';

/**
 * Select complete intl state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The intl state
 */
export const selectStateSearch = createSelector(
    [(state) => state?.[SEARCH_RESOURCE_NAME]],
    function (search: SearchStateType): SearchStateType {
        return isEmpty(search) ? initialState : search;
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
    function (search: SearchStateType): string {
        return get(search, 'payload.term', initialState.payload.term);
    }
);
