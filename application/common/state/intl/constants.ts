/**
 * Es6 module for Redux Architecture.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/erikras/ducks-modular-redux}
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 */
import { IntlStateType, Locale } from './types';

/**
 * @type {string}
 */
export const INTL_RESOURCE_NAME = 'intl';

/**
 * @type {string}
 */
export const INTL_LOCALE_EN_EN = 'en-EN';

/**
 * @type {string}
 */
export const INTL_LOCALE_DE_DE = 'de-DE';

/**
 * @type {string}
 */
export const INTL_CHANGE_LOCALE = `${INTL_RESOURCE_NAME}/INTL_CHANGE_LOCALE`;

/**
 * @type {Array<string>}
 */
export const AVAILABLE_LOCALES: Locale[] = [INTL_LOCALE_EN_EN];

/**
 * @type {object}
 */
export const INITIAL_STATE: IntlStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        locale: AVAILABLE_LOCALES[0],
        availableLocales: AVAILABLE_LOCALES
    }
};
