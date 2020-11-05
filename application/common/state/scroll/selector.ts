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

import { initialState, SCROLL_RESOURCE_NAME } from './duck';
import { ScrollStateType } from './types';

/**
 * Select complete scroll state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The scroll state
 */
export const selectStateScroll = createSelector(
    [(state) => state?.[SCROLL_RESOURCE_NAME]],
    function (scroll: ScrollStateType): ScrollStateType {
        return isEmpty(scroll) ? initialState : scroll;
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
    function (scroll: ScrollStateType): boolean {
        return get(
            scroll,
            'payload.isHeaderFixed',
            initialState.payload.isHeaderFixed
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
    function (scroll: ScrollStateType): boolean {
        return get(
            scroll,
            'payload.isHeaderVisible',
            initialState.payload.isHeaderVisible
        );
    }
);
