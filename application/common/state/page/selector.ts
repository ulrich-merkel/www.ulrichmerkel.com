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
import { INITIAL_STATE, PAGE_RESOURCE_NAME } from './constants';
import { PageStateType } from './types';

/**
 * Select complete page state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The page state
 */
export const selectStatePage = createSelector(
    [(state: RootState) => state?.[PAGE_RESOURCE_NAME]],
    function resultFunc(page: PageStateType): PageStateType {
        return isEmpty(page) ? INITIAL_STATE : page;
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
    function resultFunc(page: PageStateType): number {
        return get(
            page,
            'payload.viewsAfterReload',
            INITIAL_STATE.payload.viewsAfterReload
        );
    }
);
