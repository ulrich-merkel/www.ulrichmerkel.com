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
    ChangeThemeSelectedActionType,
    ColorSchemeActionTypes,
    ColorSchemeStateType
} from './types';

/**
 * @type {string}
 */
export const COLOR_SCHEME_RESOURCE_NAME = 'colorScheme';

/**
 * @type {string}
 */
export const COLOR_SCHEME_LIGHT = 'light';

/**
 * @type {string}
 */
export const COLOR_SCHEME_DARK = 'dark';

/**
 * @type {string}
 */
export const COLOR_SCHEME_TOGGLE_SELECTED = `${COLOR_SCHEME_RESOURCE_NAME}/COLOR_SCHEME_TOGGLE_SELECTED`;

/**
 * @type {Array<string>}
 */
export const AVAILABLE_COLOR_SCHEMES = [COLOR_SCHEME_LIGHT, COLOR_SCHEME_DARK];

/**
 * Define pubsub message name for theme change.
 *
 * @type {string}
 */
export const PUBSUB_COLOR_SCHEME_CHANGE_MESSAGE = `${COLOR_SCHEME_RESOURCE_NAME}/COLOR_SCHEME_CHANGE_MESSAGE`;

/**
 * @type {object}
 */
export const initialState: ColorSchemeStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        selected: COLOR_SCHEME_LIGHT
    }
};

/**
 * Handle theme switch state change.
 *
 * @returns {object} The redux action playload
 */
export function toggleThemeSelected(): ChangeThemeSelectedActionType {
    return {
        type: COLOR_SCHEME_TOGGLE_SELECTED
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
    state: ColorSchemeStateType = initialState,
    action: ColorSchemeActionTypes
): ColorSchemeStateType {
    switch (action.type) {
        case COLOR_SCHEME_TOGGLE_SELECTED: {
            const selected =
                state.payload.selected === COLOR_SCHEME_LIGHT
                    ? COLOR_SCHEME_DARK
                    : COLOR_SCHEME_LIGHT;
            return {
                meta: {
                    ...state.meta,
                    isInitial: false
                },
                payload: {
                    ...state.payload,
                    selected
                }
            };
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
export const reducerColorScheme = {
    [COLOR_SCHEME_RESOURCE_NAME]: reducer
};
