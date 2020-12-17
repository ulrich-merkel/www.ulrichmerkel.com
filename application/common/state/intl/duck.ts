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
import produce, { Draft } from 'immer';
import { isValidString } from '../../utils/string';
import {
    INTL_RESOURCE_NAME,
    INTL_CHANGE_LOCALE,
    AVAILABLE_LOCALES,
    INITIAL_STATE
} from './constants';
import {
    ChangeIntlActionType,
    IntlActionTypes,
    IntlStateType,
    Locale
} from './types';

/**
 * Small helper to get a valid locale from action input.
 *
 * @param {string} locale - The new locale
 * @returns {string} The validated locale
 */
export function getValidatedLocale(locale: Locale): Locale {
    if (!isValidString(locale)) {
        return '';
    }
    const trimmedLocale = locale.trim();
    return AVAILABLE_LOCALES.includes(trimmedLocale) ? trimmedLocale : '';
}

/**
 * Handle locale string state change.
 *
 * @param {string} [locale] - The new locale
 * @param {string} [fallback] - The fallback locale if new locale is not available
 * @returns {object} The redux action playload
 */
export function changeIntlLocale(
    locale?: string,
    fallback?: string
): ChangeIntlActionType {
    return {
        type: INTL_CHANGE_LOCALE,
        locale,
        fallback
    };
}

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @param {object} [state=INITIAL_STATE] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
export function reducer(
    state: IntlStateType = INITIAL_STATE,
    action: IntlActionTypes
): IntlStateType {
    return produce(state, function handleProduce(draft: Draft<IntlStateType>) {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case INTL_CHANGE_LOCALE: {
                const actionLocale = getValidatedLocale(action.locale);
                const actionFallback = getValidatedLocale(action.fallback);
                const locale = actionLocale || actionFallback;

                if (!isValidString(locale)) {
                    break;
                }

                draft.meta.isInitial = false;
                draft.payload.locale = locale;
                break;
            }
        }
    });
}

/**
 * Convinient helper to export the reducer with
 * the corresponding redux store resource object key.
 *
 * @type {Object}
 */
export const reducerIntl = {
    [INTL_RESOURCE_NAME]: reducer
};
