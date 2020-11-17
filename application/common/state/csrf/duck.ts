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
import { CsrfStateType, CsrfActionTypes } from './types';

/**
 * @type {string}
 */
export const CSRF_RESOURCE_NAME = 'csrf';

/**
 * @type {string}
 */
export const CHANGE_CSRF_TOKEN = `${CSRF_RESOURCE_NAME}/CHANGE_CSRF_TOKEN`;

/**
 * @type {object}
 */
export const initialState: CsrfStateType = {
    meta: {
        isInitial: true
    },
    payload: {
        token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
    }
};

/**
 * Handle search token state change.
 *
 * @param {string} token - The search input value
 * @returns {object} The redux action playload
 */
export function changeCsrfToken(token: string): CsrfActionTypes {
    return {
        type: CHANGE_CSRF_TOKEN,
        token
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
    state: CsrfStateType = initialState,
    action: CsrfActionTypes
): CsrfStateType {
    switch (action.type) {
        case CHANGE_CSRF_TOKEN: {
            const token = isString(action.token) ? action.token : '';
            return {
                meta: {
                    ...state.meta,
                    isInitial: false
                },
                payload: {
                    ...state.payload,
                    token
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
export const reducerCsrf = {
    [CSRF_RESOURCE_NAME]: reducer
};
