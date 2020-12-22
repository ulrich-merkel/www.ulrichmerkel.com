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
import { isBoolean } from 'lodash';
import {
    INITIAL_STATE,
    SCROLL_RESOURCE_NAME,
    SCROLL_HEADER_FIXED,
    SCROLL_HEADER_VISIBLE
} from './constants';
import {
    ScrollStateType,
    ScrollActionTypes,
    HeaderFixedActionType,
    HeaderVisibleActionType
} from './types';

/**
 * Handle header fixed state change.
 *
 * @param {boolean} isHeaderFixed - Whether the header should be displayed fixed or not
 * @returns {object} The redux action playload
 */
export function changeScrollHeaderFixed(
    isHeaderFixed: boolean
): HeaderFixedActionType {
    return {
        type: SCROLL_HEADER_FIXED,
        isHeaderFixed
    };
}

/**
 * Handle header visible state change.
 *
 * @param {boolean} isHeaderVisible - Whether the header is visible or not
 * @returns {object} The redux action playload
 */
export function changeScrollHeaderVisible(
    isHeaderVisible: boolean
): HeaderVisibleActionType {
    return {
        type: SCROLL_HEADER_VISIBLE,
        isHeaderVisible
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
    state: ScrollStateType = INITIAL_STATE,
    action: ScrollActionTypes
): ScrollStateType {
    return produce(
        state,
        function handleProduce(draft: Draft<ScrollStateType>) {
            // eslint-disable-next-line default-case
            switch (action.type) {
                case SCROLL_HEADER_FIXED: {
                    const isHeaderFixed = isBoolean(action.isHeaderFixed)
                        ? !!action.isHeaderFixed
                        : INITIAL_STATE.payload.isHeaderFixed;

                    draft.meta.isInitial = false;
                    draft.payload.isHeaderFixed = isHeaderFixed;
                    break;
                }
                case SCROLL_HEADER_VISIBLE: {
                    const isHeaderVisible = isBoolean(action.isHeaderVisible)
                        ? !!action.isHeaderVisible
                        : INITIAL_STATE.payload.isHeaderVisible;

                    draft.meta.isInitial = false;
                    draft.payload.isHeaderVisible = isHeaderVisible;
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
export const reducerScroll = {
    [SCROLL_RESOURCE_NAME]: reducer
};
