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
import {
    AVAILABLE_MOTION_PREFERENCES,
    INITIAL_STATE,
    REDUCED_MOTION_RESOURCE_NAME,
    REDUCED_MOTION_TOGGLE_SELECTED,
    REDUCED_MOTION_TOGGLE_SELECTED_SAGA
} from './constants';
import {
    ChangeReducedMotionSelectedActionType,
    ReducedMotionActionTypes,
    ReducedMotionStateType,
    AvailableReducedMotionsType
} from './types';

const { NO_PREFERENCE, REDUCE } = AVAILABLE_MOTION_PREFERENCES;

/**
 * Handle theme switch state change.
 *
 * @returns {object} The redux action playload
 */
export function toggleReducedMotionSelected(): ChangeReducedMotionSelectedActionType {
    return {
        type: REDUCED_MOTION_TOGGLE_SELECTED_SAGA
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
    return currentSelected === REDUCE ? NO_PREFERENCE : REDUCE;
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
    state: ReducedMotionStateType = INITIAL_STATE,
    action: ReducedMotionActionTypes
): ReducedMotionStateType {
    return produce(
        state,
        function handleProduce(draft: Draft<ReducedMotionStateType>) {
            // eslint-disable-next-line default-case
            switch (action.type) {
                case REDUCED_MOTION_TOGGLE_SELECTED: {
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
export const reducerReducedMotion = {
    [REDUCED_MOTION_RESOURCE_NAME]: reducer
};
