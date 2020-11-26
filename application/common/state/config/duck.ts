/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
import { get } from 'lodash';
import { Action } from 'redux';

import { url } from '../../config/application';
import { xhr } from '../../utils/xhr';
import { getDateNow } from '../../utils/date';
import { logger } from '../../utils/logger';
import { RootState } from '../configure-store';
import {
    RequestConfigTranslationActionType,
    ReceiveConfigContentActionType,
    ReceiveConfigTranslationActionType,
    FailedConfigTranslationActionType
} from './types';
import { Locale } from '../intl/types';

/**
 * @type {string}
 */
export const CONFIG_RESOURCE_NAME = 'config';

/**
 * @type {string}
 */
export const FETCH_CONFIG_CONTENT_REQUEST = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_CONTENT_REQUEST`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_CONTENT_FAILURE = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_CONTENT_FAILURE`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_CONTENT_SUCCESS = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_CONTENT_SUCCESS`;

/**
 * @type {string}
 */
export const CONFIG_CONTENT_ADD = `${CONFIG_RESOURCE_NAME}/CONFIG_CONTENT_ADD`;

/**
 * @type {string}
 */
export const CONFIG_CONTENT_INVALIDATE = `${CONFIG_RESOURCE_NAME}/CONFIG_CONTENT_INVALIDATE`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_TRANSLATION_REQUEST = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_TRANSLATION_REQUEST`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_TRANSLATION_FAILURE = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_TRANSLATION_FAILURE`;

/**
 * @type {string}
 */
export const FETCH_CONFIG_TRANSLATION_SUCCESS = `${CONFIG_RESOURCE_NAME}/FETCH_CONFIG_TRANSLATION_SUCCESS`;

/**
 * @type {string}
 */
export const CONFIG_TRANSLATION_ADD = `${CONFIG_RESOURCE_NAME}/CONFIG_TRANSLATION_ADD`;

/**
 * @type {string}
 */
export const CONFIG_TRANSLATION_INVALIDATE = `${CONFIG_RESOURCE_NAME}/CONFIG_TRANSLATION_INVALIDATE`;

/**
 * Check if async data needs to be loaded from server.
 *
 * @private
 * @param {object} [state] - The current config redux store object
 * @param {string} [stateKey] - The state key as input for lodash's get
 * @returns {boolean}
 */
export function shouldFetch(state?: RootState, stateKey?: string): boolean {
    const stateData = get(state, stateKey);

    if (!stateData || !stateData.data) {
        return true;
    }
    if (stateData.isFetching) {
        return false;
    }

    return stateData.didInvalidate;
}

/**
 * Start loading content configuration async.
 *
 * @private
 * @returns {object} Redux action
 */
export function requestConfigContent(): Action {
    return {
        type: FETCH_CONFIG_CONTENT_REQUEST
    };
}

/**
 * Start loading content configuration async.
 *
 * @private
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
export function requestConfigTranslation(
    locale: Locale
): RequestConfigTranslationActionType {
    return {
        type: FETCH_CONFIG_TRANSLATION_REQUEST,
        locale
    };
}

/**
 * The content configuation data is loaded from the server.
 *
 * @private
 * @param {object} data - The api json data
 * @returns {object} Redux action
 */
export function receiveConfigContent(
    data: Record<string, unknown>
): ReceiveConfigContentActionType {
    return {
        type: FETCH_CONFIG_CONTENT_SUCCESS,
        receivedAt: getDateNow(),
        data
    };
}

/**
 * The content configuation data is loaded from the server.
 *
 * @private
 * @param {object} data - The api json data
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
export function receiveConfigTranslation(
    data: Record<string, unknown>,
    locale: Locale
): ReceiveConfigTranslationActionType {
    return {
        type: FETCH_CONFIG_TRANSLATION_SUCCESS,
        receivedAt: getDateNow(),
        data,
        locale
    };
}

/**
 * The content configuation data could not be loader from the server.
 *
 * @private
 * @returns {object} Redux action
 */
export function failedConfigContent(): Action {
    return {
        type: FETCH_CONFIG_CONTENT_FAILURE
    };
}

/**
 * The content configuation data could not be loader from the server.
 *
 * @private
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
export function failedConfigTranslation(
    locale: Locale
): FailedConfigTranslationActionType {
    return {
        type: FETCH_CONFIG_TRANSLATION_FAILURE,
        locale
    };
}

/**
 * Add config content object directly.
 *
 * @param {object} data - The api json data
 * @returns {object} Redux action
 */
export function addConfigContent(data) {
    return {
        type: CONFIG_CONTENT_ADD,
        receivedAt: getDateNow(),
        data
    };
}

/**
 * Add config content object directly.
 *
 * @param {object} data - The api json data
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
export function addConfigTranslation(data, locale: Locale) {
    return {
        type: CONFIG_TRANSLATION_ADD,
        receivedAt: getDateNow(),
        data,
        locale
    };
}

/**
 * Redux thunk action creator for async content fetching.
 *
 * @private
 * @returns {Function}
 */
export function fetchConfigContent() {
    return function reduxThunk(dispatch) {
        dispatch(requestConfigContent());

        return xhr(`${url.api}${url.apiConfigContent}`, { method: 'GET' })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return dispatch(receiveConfigContent(json));
            })
            .catch((reason) => {
                dispatch(failedConfigContent());
                logger.warn(reason);
            });
    };
}

/**
 * Redux thunk action creator for async translation fetching.
 *
 * @private
 * @param {string} locale - The current language locale
 * @returns {Function}
 */
export function fetchConfigTranslation(locale: Locale) {
    return function reduxThunk(dispatch) {
        dispatch(requestConfigTranslation(locale));

        return xhr(`${url.api}${url.apiConfig}/${locale}`, { method: 'GET' })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return dispatch(receiveConfigTranslation(json, locale));
            })
            .catch((reason) => {
                dispatch(failedConfigTranslation(locale));
                logger.warn(reason);
            });
    };
}

/**
 * Redux thunk action creator to check if data should be loaded.
 *
 * @function
 * @returns {Function}
 */
export function fetchConfigContentIfNeeded() {
    return function reduxThunk(dispatch, getState) {
        if (shouldFetch(getState(), 'config.content')) {
            return dispatch(fetchConfigContent());
        }
        return Promise.resolve();
    };
}

/**
 * Redux thunk action creator to check if data should be loaded.
 *
 * @param {string} loc - The current language locale
 * @returns {Function}
 */
export function fetchConfigTranslationIfNeeded(loc: Locale) {
    return function reduxThunk(dispatch, getState) {
        if (!loc) {
            return dispatch(failedConfigTranslation(loc));
        }

        const locale = loc.toLowerCase();
        if (shouldFetch(getState(), `config.${locale}`)) {
            return dispatch(fetchConfigTranslation(locale));
        }
        return Promise.resolve();
    };
}

/**
 * Encapsulate the idea of passing a new object as the first parameter
 * to Object.assign to ensure we correctly copy data instead of mutating.
 *
 * @function
 * @private
 * @param {object} oldObject - The old state object
 * @param {object} newValues - The new state object
 * @returns {object}
 */
function updateStateObject(oldObject, newValues) {
    return { ...oldObject, ...newValues };
}

/**
 * Convenient function to get content object for new data.
 *
 * @function
 * @private
 * @param {object} action - The redux action
 * @returns {object} The new config content state
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
 * @type {object}
 */
export const initialState = {
    content: {
        isFetching: false,
        didInvalidate: false
    }
};

/**
 * Used to reduce a stream of actions coming from the dispatcher into a
 * single state object. This will handle merge and clear actions for this resource.
 *
 * @function
 * @param {object} [state=initialState] - The current state
 * @param {object} action - The action sent by the dispatcher
 * @returns {object} The new state for this store
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case CONFIG_CONTENT_ADD:
            return updateStateObject(state, {
                content: getAsyncStateObject(action)
            });
        case FETCH_CONFIG_CONTENT_REQUEST:
            return updateStateObject(state, {
                content: {
                    ...state.content,
                    isFetching: true,
                    didInvalidate: false
                }
            });
        case FETCH_CONFIG_CONTENT_SUCCESS:
            return updateStateObject(state, {
                content: getAsyncStateObject(action)
            });
        case CONFIG_TRANSLATION_ADD:
            return updateStateObject(state, {
                [action.locale]: getAsyncStateObject(action)
            });
        case FETCH_CONFIG_TRANSLATION_REQUEST:
            return updateStateObject(state, {
                [action.locale]: {
                    ...state[action.locale],
                    isFetching: true,
                    didInvalidate: false
                }
            });
        case FETCH_CONFIG_TRANSLATION_SUCCESS:
            return updateStateObject(state, {
                [action.locale]: getAsyncStateObject(action)
            });
        default:
            return state;
    }
}

/**
 * Convinient helper to export the reducer with
 * the corresponding redux store resource object key.
 *
 * @type {Object}
 */
export const reducerConfig = {
    [CONFIG_RESOURCE_NAME]: reducer
};
