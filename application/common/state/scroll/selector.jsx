/* eslint-disable import/prefer-default-export, arrow-parens */
/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires reselect
 * @requires lodash
 * @requires common/state/scroll/reducer
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { createSelector } from 'reselect';
import { get } from 'lodash';

import { defaultState } from './reducer';

/**
 * Select scroll headerFixed state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The fixed layout header state
 */
const selectStateScrollHeaderFixed = createSelector(
    [
        (state) => state.scroll
    ],
    (scroll) => {
        return get(scroll, 'headerFixed', defaultState.headerFixed);
    }
);

/**
 * Select scroll headerVisible state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The fixed layout header state
 */
const selectStateScrollHeaderVisible = createSelector(
    [
        (state) => state.scroll
    ],
    (scroll) => {
        return get(scroll, 'headerVisible', defaultState.headerVisible);
    }
);

export {
    selectStateScrollHeaderFixed,
    selectStateScrollHeaderVisible
};
