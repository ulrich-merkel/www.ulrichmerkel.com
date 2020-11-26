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
import {
    ChangeIntlActionType,
    IntlActionTypes,
    IntlStateType,
    Locale
} from './types';

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
export const initialState: IntlStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        locale: AVAILABLE_LOCALES[0],
        availableLocales: AVAILABLE_LOCALES
    }
};

/**
 * Handle locale string state change.
 *
 * @param {string} locale - The new locale
 * @param {string} [fallback] - The fallback locale if new locale is not available
 * @returns {object} The redux action playload
 */
export function changeIntlLocale(
    locale: string,
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
 * @param {object} [state=initialState] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
export function reducer(
    state: IntlStateType = initialState,
    action: IntlActionTypes
): IntlStateType {
    switch (action.type) {
        case INTL_CHANGE_LOCALE: {
            const locale = action.locale && action.locale.trim();
            if (locale && AVAILABLE_LOCALES.includes(locale)) {
                return {
                    meta: {
                        ...state.meta,
                        isInitial: false
                    },
                    payload: {
                        ...state.payload,
                        locale
                    }
                };
            }

            const fallback = action.fallback && action.fallback.trim();
            if (fallback && AVAILABLE_LOCALES.includes(fallback)) {
                return {
                    meta: {
                        ...state.meta,
                        isInitial: false
                    },
                    payload: {
                        ...state.payload,
                        locale: fallback
                    }
                };
            }

            return state;
        }
        default: {
            return state;
        }
    }
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
