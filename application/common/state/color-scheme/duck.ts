/**
 * Es6 module for Redux Architecture.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme}
 * @see {@link https://github.com/erikras/ducks-modular-redux}
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 */
import produce, { Draft } from 'immer';
import {
    AVAILABLE_COLOR_SCHEMES,
    COLOR_SCHEME_RESOURCE_NAME,
    COLOR_SCHEME_TOGGLE_SELECTED,
    COLOR_SCHEME_TOGGLE_SELECTED_SAGA,
    INITIAL_STATE
} from './constants';
import {
    AvailableColorSchemesType,
    ChangeThemeSelectedActionType,
    ColorSchemeActionTypes,
    ColorSchemeStateType
} from './types';

const { DARK, LIGHT } = AVAILABLE_COLOR_SCHEMES;

/**
 * Handle theme switch state change.
 *
 * @returns {object} The redux action playload
 */
export function toggleColorSchemeSelected(): ChangeThemeSelectedActionType {
    return {
        type: COLOR_SCHEME_TOGGLE_SELECTED_SAGA
    };
}

/**
 * Get new selected color scheme
 *
 * @param {string} currentSelected - The previous/current selected color scheme
 * @returns {string} The new selected color scheme
 */
export function toggleSelected(
    currentSelected: AvailableColorSchemesType
): AvailableColorSchemesType {
    return currentSelected === LIGHT ? DARK : LIGHT;
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
    state: ColorSchemeStateType = INITIAL_STATE,
    action: ColorSchemeActionTypes
): ColorSchemeStateType {
    return produce(
        state,
        function handleProduce(draft: Draft<ColorSchemeStateType>) {
            // eslint-disable-next-line default-case
            switch (action.type) {
                case COLOR_SCHEME_TOGGLE_SELECTED: {
                    const selected = toggleSelected(action.selected);

                    draft.meta.isInitial = false;
                    draft.payload.selected = selected;
                    break;
                }
            }
        }
    );
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
