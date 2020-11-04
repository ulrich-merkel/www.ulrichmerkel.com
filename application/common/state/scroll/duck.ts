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
import { ScrollStateType, ScrollActionTypes } from './types';

/**
 * @type {string}
 */
export const SCROLL_RESOURCE_NAME = 'scroll';

/**
 * @type {string}
 */
export const SCROLL_HEADER_FIXED = `${SCROLL_RESOURCE_NAME}/SCROLL_HEADER_FIXED`;

/**
 * @type {string}
 */
export const SCROLL_HEADER_VISIBLE = `${SCROLL_RESOURCE_NAME}/SCROLL_HEADER_VISIBLE`;

/**
 * @type {object}
 */
export const initialState: ScrollStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        isHeaderFixed: true,
        isHeaderVisible: true
    }
}

/**
 * Handle header fixed state change.
 *
 * @param {boolean} isHeaderFixed - Whether the header should be displayed fixed or not
 * @returns {object} The redux action playload
 */
export function changeScrollHeaderFixed(isHeaderFixed: boolean): ScrollActionTypes {
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
export function changeScrollHeaderVisible(isHeaderVisible: boolean): ScrollActionTypes {
    return {
        type: SCROLL_HEADER_VISIBLE,
        isHeaderVisible
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
export function reducer(state: ScrollStateType = initialState, action: ScrollActionTypes): ScrollStateType {
    switch (action.type) {
    case SCROLL_HEADER_FIXED: {
        const isHeaderFixed = action.isHeaderFixed !== undefined
            ? !!action.isHeaderFixed
            : initialState.payload.isHeaderFixed;
        return {
            ...state,
            meta: {
                ...state.meta,
                isInitial: false
            },
            payload: {
                ...state.payload,
                isHeaderFixed
            }
        };
    }
    case SCROLL_HEADER_VISIBLE: {
        const isHeaderVisible = action.isHeaderVisible !== undefined
            ? !!action.isHeaderVisible
            : initialState.payload.isHeaderVisible;
        return {
            ...state,
            meta: {
                ...state.meta,
                isInitial: false
            },
            payload: {
                ...state.payload,
                isHeaderVisible
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
export const reducerScroll = {
    [SCROLL_RESOURCE_NAME]: reducer
};