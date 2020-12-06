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
import { INITIAL_STATE, SCROLL_RESOURCE_NAME } from './constants';
import { ScrollStateType } from './types';

/**
 * Select complete scroll state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The scroll state
 */
export const selectStateScroll = createSelector(
    [(state: RootState) => state?.[SCROLL_RESOURCE_NAME]],
    function resultFunc(scroll: ScrollStateType): ScrollStateType {
        return isEmpty(scroll) ? INITIAL_STATE : scroll;
    }
);

/**
 * Select scroll isHeaderFixed state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The fixed layout header state
 */
export const selectStateScrollIsHeaderFixed = createSelector(
    [selectStateScroll],
    function resultFunc(scroll: ScrollStateType): boolean {
        return get(
            scroll,
            'payload.isHeaderFixed',
            INITIAL_STATE.payload.isHeaderFixed
        );
    }
);

/**
 * Select scroll isHeaderVisible state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The fixed layout header state
 */
export const selectStateScrollIsHeaderVisible = createSelector(
    [selectStateScroll],
    function resultFunc(scroll: ScrollStateType): boolean {
        return get(
            scroll,
            'payload.isHeaderVisible',
            INITIAL_STATE.payload.isHeaderVisible
        );
    }
);
