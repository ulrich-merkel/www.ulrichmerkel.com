/* eslint-disable arrow-parens */
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
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { createSelector } from 'reselect';

/**
 * Select csrf state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The csrf token if found or en empty string
 */
const selectStateCsrfToken = createSelector([(state) => state.csrf], (csrf) => {
    if (!csrf || !csrf.token) {
        return '';
    }
    return csrf.token;
});

export { selectStateCsrfToken };
