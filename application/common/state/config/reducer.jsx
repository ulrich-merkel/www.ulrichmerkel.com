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
 * @requires common/state/config/constants
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import {
    FETCH_CONFIG_CONTENT_REQUEST,
    FETCH_CONFIG_CONTENT_SUCCESS,
    CONFIG_CONTENT_ADD,
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_TRANSLATION_SUCCESS,
    CONFIG_TRANSLATION_ADD
} from './constants';

const defaultState = {
    content: {
        isFetching: false,
        didInvalidate: false
    }
};

/**
 * Encapsulate the idea of passing a new object as the first parameter
 * to Object.assign to ensure we correctly copy data instead of mutating.
 *
 * @function
 * @private
 * @param {Object} oldObject - The old state object
 * @param {Object} newValues - The new state object
 * @returns {Object}
 */
function updateStateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

/**
 * Convenient function to get content object for new data.
 *
 * @function
 * @private
 * @param {Object} action - The redux action
 * @returns {Object} The new config content state
 */
function getAsyncStateObject(action) {
    return {
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        lastUpdated: action.receivedAt
    };
}

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @function
 * @param {Object} [state=defaultState] - The current state
 * @param {Object} action - The action sent by the dispatcher
 * @returns {Object} The new state for this store
 */
function reducer(state = defaultState, action) {

    switch (action.type) {
    case CONFIG_CONTENT_ADD:
        return updateStateObject(state, { content: getAsyncStateObject(action) });
    case FETCH_CONFIG_CONTENT_REQUEST:
        return updateStateObject(state, { content: {
            ...state.content,
            isFetching: true,
            didInvalidate: false
        } });
    case FETCH_CONFIG_CONTENT_SUCCESS:
        return updateStateObject(state, { content: getAsyncStateObject(action) });
    case CONFIG_TRANSLATION_ADD:
        return updateStateObject(state, { [action.locale]: getAsyncStateObject(action) });
    case FETCH_CONFIG_TRANSLATION_REQUEST:
        return updateStateObject(state, { [action.locale]: {
            ...state[action.locale],
            isFetching: true,
            didInvalidate: false
        } });
    case FETCH_CONFIG_TRANSLATION_SUCCESS:
        return updateStateObject(state, { [action.locale]: getAsyncStateObject(action) });
    default:
        return state;
    }
}

export default reducer;
export {
    defaultState
};
