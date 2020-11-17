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
import { isBoolean } from 'lodash';
import { DialogActionTypes, DialogStateType } from './types';

/**
 * @type {string}
 */
export const DIALOG_RESOURCE_NAME = 'dialog';

/**
 * @type {string}
 */
export const DIALOG_VISIBLE_CHANGE = `${DIALOG_RESOURCE_NAME}/DIALOG_VISIBLE_CHANGE`;

/**
 * @type {string}
 */
export const DIALOG_CONTENT_BROADCAST = 'DIALOG_CONTENT_BROADCAST';

/**
 * @type {string}
 */
export const DIALOG_CONTENT_SEARCH = 'DIALOG_CONTENT_SEARCH';

/**
 * @type {string}
 */
export const DIALOG_CONTENT_THEME = 'DIALOG_CONTENT_THEME';

/**
 * @type {object}
 */
export const initialState: DialogStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        visible: false,
        content: ''
    }
};

/**
 * Handle dialog visibility state change.
 *
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
export function changeDialogVisible(visible: boolean): DialogActionTypes {
    return {
        type: DIALOG_VISIBLE_CHANGE,
        content: '',
        visible
    };
}

/**
 * Handle dialog visibility state change.
 *
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
export function changeDialogVisibleBroadcast(
    visible: boolean
): DialogActionTypes {
    return {
        type: DIALOG_VISIBLE_CHANGE,
        content: DIALOG_CONTENT_BROADCAST,
        visible
    };
}

/**
 * Handle dialog visibility state change.
 *
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
export function changeDialogVisibleSearch(visible: boolean): DialogActionTypes {
    return {
        type: DIALOG_VISIBLE_CHANGE,
        content: DIALOG_CONTENT_SEARCH,
        visible
    };
}

/**
 * Handle dialog visibility state change.
 *
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
export function changeDialogVisibleTheme(visible: boolean): DialogActionTypes {
    return {
        type: DIALOG_VISIBLE_CHANGE,
        content: DIALOG_CONTENT_THEME,
        visible
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
    state: DialogStateType = initialState,
    action: DialogActionTypes
): DialogStateType {
    switch (action.type) {
        case DIALOG_VISIBLE_CHANGE: {
            const { content, visible } = action;

            if (!isBoolean(visible)) {
                return state;
            }

            return {
                meta: {
                    ...state.meta,
                    isInitial: false
                },
                payload: {
                    ...state.payload,
                    content,
                    visible
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
export const reducerDialog = {
    [DIALOG_RESOURCE_NAME]: reducer
};
