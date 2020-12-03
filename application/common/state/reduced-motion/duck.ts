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
import { hasReducedMotionEnabled } from '../../../client/feature-detect/has-reduced-motion-enabled';
import {
    ChangeReducedMotionSelectedActionType,
    ReducedMotionActionTypes,
    ReducedMotionStateType,
    AvailableReducedMotionsType
} from './types';

/**
 * @type {string}
 */
export const REDUCED_MOTION_RESOURCE_NAME = 'reducedMotion';

/**
 * @type {string}
 */
export const REDUCED_MOTION_TOGGLE_SELECTED = `${REDUCED_MOTION_RESOURCE_NAME}/REDUCED_MOTION_TOGGLE_SELECTED`;

/**
 * @type {enum}
 */
export const AVAILABLE_MOTION_PREFERENCES = {
    NO_PREFERENCE: 'no-preference',
    REDUCE: 'reduce'
};

/**
 * Define pubsub message name for theme change.
 *
 * @type {string}
 */
export const PUBSUB_REDUCED_MOTION_CHANGE_MESSAGE = `${REDUCED_MOTION_RESOURCE_NAME}/REDUCED_MOTION_CHANGE_MESSAGE`;

/**
 * @type {object}
 */
export const initialState: ReducedMotionStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        selected: undefined
    }
};

/**
 * Handle theme switch state change.
 *
 * @returns {object} The redux action playload
 */
export function toggleReducedMotionSelected(): ChangeReducedMotionSelectedActionType {
    return {
        type: REDUCED_MOTION_TOGGLE_SELECTED
    };
}

/**
 * Get new selected motion type.
 *
 * @param {string} currentSelected - The previous/current selected motion type
 * @returns {string} The new selected motion type
 */
export function toggleSelected(
    currentSelected: AvailableReducedMotionsType
): AvailableReducedMotionsType {
    return currentSelected === AVAILABLE_MOTION_PREFERENCES.REDUCE
        ? AVAILABLE_MOTION_PREFERENCES.NO_PREFERENCE
        : AVAILABLE_MOTION_PREFERENCES.REDUCE;
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
    state: ReducedMotionStateType = initialState,
    action: ReducedMotionActionTypes
): ReducedMotionStateType {
    switch (action.type) {
        case REDUCED_MOTION_TOGGLE_SELECTED: {
            const currentSelected = state.payload.selected;
            const systemSetting = hasReducedMotionEnabled()
                ? AVAILABLE_MOTION_PREFERENCES.REDUCE
                : AVAILABLE_MOTION_PREFERENCES.NO_PREFERENCE;
            const selected =
                currentSelected === initialState.payload.selected
                    ? toggleSelected(systemSetting)
                    : toggleSelected(currentSelected);

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
export const reducerReducedMotion = {
    [REDUCED_MOTION_RESOURCE_NAME]: reducer
};
