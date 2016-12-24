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
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { createSelector } from 'reselect';

/**
 * Select intl locale state from redux store.
 *
 * @function
 * @param {Object} state - The current redux state
 * @returns {string} The intl locale state
 */
const selectStateIntlLocale = createSelector(
    [
        (state) => state.intl
    ],
    (intl) => {
        if (!intl || !intl.locale) {
            return '';
        }
        return intl.locale;
    }
);

export {
    selectStateIntlLocale
};
