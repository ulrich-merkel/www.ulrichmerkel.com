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
 * @requires common/state/search/reducer
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { createSelector } from 'reselect';
import { get } from 'lodash';

import { defaultState } from './reducer';

/**
 * Select search term state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The search term state
 */
const selectStateSearchTerm = createSelector(
    [(state) => state.search],
    (search) => {
        return get(search, 'term', defaultState.term);
    }
);

export { selectStateSearchTerm };
