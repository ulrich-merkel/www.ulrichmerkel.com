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
 * @requires common/state/intl/reducer
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { createSelector } from 'reselect';
import { get } from 'lodash';

import { defaultState } from './reducer';

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
        return get(intl, 'locale', defaultState.locale);
    }
);

/**
 * Select intl availableLocales state from redux store.
 *
 * @function
 * @param {Object} state - The current redux state
 * @returns {Array<string>} The intl availableLocales state
 */
const selectStateIntlAvailableLocales = createSelector(
    [
        (state) => state.intl
    ],
    (intl) => {
        return get(intl, 'availableLocales', defaultState.availableLocales);
    }
);

export {
    selectStateIntlLocale,
    selectStateIntlAvailableLocales
};
