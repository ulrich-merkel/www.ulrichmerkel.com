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
    INITIAL_STATE,
    PAGE_RESOURCE_NAME,
    PAGE_INCREASE_VIEWS
} from './constants';
import { AddPageViewActionType, PageActionTypes, PageStateType } from './types';

/**
 * Handle page view increment state change.
 *
 * @returns {object} The redux action playload
 */
export function addPageView(): AddPageViewActionType {
    return {
        type: PAGE_INCREASE_VIEWS
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
    state: PageStateType = INITIAL_STATE,
    action: PageActionTypes
): PageStateType {
    switch (action.type) {
        case PAGE_INCREASE_VIEWS: {
            const viewsAfterReload = state.payload.viewsAfterReload + 1;

            return {
                meta: {
                    ...state.meta,
                    isInitial: false
                },
                payload: {
                    ...state.payload,
                    viewsAfterReload
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
export const reducerPage = {
    [PAGE_RESOURCE_NAME]: reducer
};
