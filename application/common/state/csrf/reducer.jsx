/**
 * Es6 module for Redux Architecture.
 * Reducers specify how the application's state changes in response to the
 * corresponding actions.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html}
 *
 * @requires lodash
 * @requires common/state/csrf/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { isUndefined } from 'lodash';
import { ADD_CSRF_TOKEN } from './constants';

/**
 * @type {object}
 */
export const defaultState = {
    token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
};

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @function
 * @param {object} [state=defaultState] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
function reducer(state = defaultState, action) {
    /**
     * The reason is that the lexical declaration is visible in the entire switch block but it only gets initialized
     * when it is assigned, which will only happen if the case where it is defined is reached.
     * To ensure that the lexical declaration only applies to the current case clause wrap your clauses in blocks.
     */
    switch (action.type) {
        case ADD_CSRF_TOKEN: {
            const { token } = action;
            if (isUndefined(token)) {
                return state;
            }
            return {
                token
            };
        }
        default: {
            return state;
        }
    }
}

export default reducer;
