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
import { isString } from 'lodash';
import {
    SEARCH_RESOURCE_NAME,
    SEARCH_CHANGE_TERM,
    INITIAL_STATE
} from './constants';
import { SearchStateType, SearchActionTypes } from './types';

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
 * @param {object} [state=INITIAL_STATE] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
export function reducer(
    state: SearchStateType = INITIAL_STATE,
    action: SearchActionTypes
): SearchStateType {
    return produce(
        state,
        function handleProduce(draft: Draft<SearchStateType>) {
            // eslint-disable-next-line default-case
            switch (action.type) {
                case SEARCH_CHANGE_TERM: {
                    const term = isString(action.term) ? action.term : '';

                    draft.meta.isInitial = false;
                    draft.payload.term = term;
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
export const reducerSearch = {
    [SEARCH_RESOURCE_NAME]: reducer
};
