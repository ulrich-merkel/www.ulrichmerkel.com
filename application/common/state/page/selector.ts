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

import { initialState, PAGE_RESOURCE_NAME } from './duck';
import { PageStateType } from './types';

/**
 * Select complete page state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The page state
 */
export const selectStatePage = createSelector(
    [(state) => state?.[PAGE_RESOURCE_NAME]],
    function (page: PageStateType): PageStateType {
        return isEmpty(page) ? initialState : page;
    }
);

/**
 * Select viewsAfterReload state.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {number} The viewsAfterReload state
 */
export const selectStatePageViewsAfterReload = createSelector(
    [selectStatePage],
    function (page: PageStateType): number {
        return get(
            page,
            'payload.viewsAfterReload',
            initialState.payload.viewsAfterReload
        );
    }
);
