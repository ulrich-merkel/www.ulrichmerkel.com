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

import { RootState } from '../configure-store';
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
    [(state: RootState) => state?.[INTL_RESOURCE_NAME]],
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
