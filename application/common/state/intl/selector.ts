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
import { INITIAL_STATE, INTL_RESOURCE_NAME } from './constants';
import { IntlStateType, Locale, Locales } from './types';

/**
 * Select complete intl state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The intl state
 */
export const selectStateIntl = createSelector(
    [(state: RootState) => state?.[INTL_RESOURCE_NAME]],
    function resultFunc(intl: IntlStateType): IntlStateType {
        return isEmpty(intl) ? INITIAL_STATE : intl;
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
    function resultFunc(intl: IntlStateType): Locale {
        return get(intl, 'payload.locale', INITIAL_STATE.payload.locale);
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
    function resultFunc(intl: IntlStateType): Locales[] {
        return get(
            intl,
            'payload.availableLocales',
            INITIAL_STATE.payload.availableLocales
        );
    }
);
