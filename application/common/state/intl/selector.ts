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
import { get, isEmpty } from 'lodash';

import { initialState, INTL_RESOURCE_NAME } from './duck';
import { IntlStateType } from './types';

/**
 * Select complete intl state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The intl state
 */
export const selectStateIntl = createSelector(
    [(state) => state?.[INTL_RESOURCE_NAME]],
    function (intl: IntlStateType): IntlStateType {
        return isEmpty(intl) ? initialState : intl;
    }
);

/**
 * Select intl locale state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The intl locale state
 */
export const selectStateIntlLocale = createSelector(
    [selectStateIntl],
    function (intl: IntlStateType): string {
        return get(intl, 'payload.locale', initialState.payload.locale);
    }
);

/**
 * Select intl availableLocales state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {Array<string>} The intl availableLocales state
 */
export const selectStateIntlAvailableLocales = createSelector(
    [selectStateIntl],
    function (intl: IntlStateType): string[] {
        return get(
            intl,
            'payload.availableLocales',
            initialState.payload.availableLocales
        );
    }
);
