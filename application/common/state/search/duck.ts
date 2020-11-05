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
import { isString } from 'lodash';
import { SearchStateType, SearchActionTypes } from './types';

/**
 * @type {string}
 */
export const SEARCH_RESOURCE_NAME = 'search';

/**
 * @type {string}
 */
export const SEARCH_CHANGE_TERM = `${SEARCH_RESOURCE_NAME}/SEARCH_CHANGE_TERM`;

/**
 * @type {object}
 */
export const initialState: SearchStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        term: ''
    }
};

/**
 * Handle search term state change.
 *
 * @param {string} term - The search input value
 * @returns {object} The redux action playload
 */
export function changeSearchTerm(term: string): SearchActionTypes {
    return {
        type: SEARCH_CHANGE_TERM,
        term
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
    state: SearchStateType = initialState,
    action: SearchActionTypes
): SearchStateType {
    switch (action.type) {
        case SEARCH_CHANGE_TERM: {
            const term = isString(action.term) ? action.term : ''
            return {
                meta: {
                    ...state.meta,
                    isInitial: false
                },
                payload: {
                    ...state.payload,
                    term
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
export const reducerSearch = {
    [SEARCH_RESOURCE_NAME]: reducer
};
