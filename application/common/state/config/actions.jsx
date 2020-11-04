/**
 * Es6 module for Redux Architecture.
 * Actions are payloads of information that send data from your application
 * to your store. They are the only source of information for the store. You
 * send them to the store using store.dispatch().
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://github.com/reactjs/react-redux/issues/308}
 * @see {@link https://github.com/reactjs/redux/issues/533}
 *
 * @requires lodash
 * @requires common/config/application
 * @requires common/utils/xhr
 * @requires common/utils/logger
 * @requires common/state/config/constants
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import { get } from 'lodash';

import { url } from '../../config/application';
import xhr from '../../utils/xhr';
import { getDateNow } from '../../utils/date';
import logger from '../../utils/logger';
import {
    FETCH_CONFIG_CONTENT_REQUEST,
    FETCH_CONFIG_CONTENT_SUCCESS,
    FETCH_CONFIG_CONTENT_FAILURE,
    CONFIG_CONTENT_ADD,
    FETCH_CONFIG_TRANSLATION_REQUEST,
    FETCH_CONFIG_TRANSLATION_SUCCESS,
    FETCH_CONFIG_TRANSLATION_FAILURE,
    CONFIG_TRANSLATION_ADD
} from './constants';

/**
 * Check if async data needs to be loaded from server.
 *
 * @function
 * @private
 * @param {object} state - The current redux store object
 * @param {string} stateKey - The state key as input for lodash's get
 * @returns {boolean}
 */
function shouldFetch(state, stateKey) {
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
 * @function
 * @private
 * @returns {object} Redux action
 */
function requestConfigContent() {
    return {
        type: FETCH_CONFIG_CONTENT_REQUEST
    };
}

/**
 * Start loading content configuration async.
 *
 * @function
 * @private
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
function requestConfigTranslation(locale) {
    return {
        type: FETCH_CONFIG_TRANSLATION_REQUEST,
        locale
    };
}

/**
 * The content configuation data is loaded from the server.
 *
 * @function
 * @private
 * @param {object} data - The api json data
 * @returns {object} Redux action
 */
function receiveConfigContent(data) {
    return {
        type: FETCH_CONFIG_CONTENT_SUCCESS,
        receivedAt: getDateNow(),
        data
    };
}

/**
 * The content configuation data is loaded from the server.
 *
 * @function
 * @private
 * @param {object} data - The api json data
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
function receiveConfigTranslation(data, locale) {
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
 * @function
 * @private
 * @returns {object} Redux action
 */
function failedConfigContent() {
    return {
        type: FETCH_CONFIG_CONTENT_FAILURE
    };
}

/**
 * The content configuation data could not be loader from the server.
 *
 * @function
 * @private
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
function failedConfigTranslation(locale) {
    return {
        type: FETCH_CONFIG_TRANSLATION_FAILURE,
        locale
    };
}

/**
 * Add config content object directly.
 *
 * @function
 * @param {object} data - The api json data
 * @returns {object} Redux action
 */
function addConfigContent(data) {
    return {
        type: CONFIG_CONTENT_ADD,
        receivedAt: getDateNow(),
        data
    };
}

/**
 * Add config content object directly.
 *
 * @function
 * @param {object} data - The api json data
 * @param {string} locale - The current language locale
 * @returns {object} Redux action
 */
function addConfigTranslation(data, locale) {
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
 * @function
 * @private
 * @returns {Function}
 */
function fetchConfigContent() {
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
 * @function
 * @private
 * @param {string} locale - The current language locale
 * @returns {Function}
 */
function fetchConfigTranslation(locale) {
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
function fetchConfigContentIfNeeded() {
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
 * @function
 * @param {string} loc - The current language locale
 * @returns {Function}
 */
function fetchConfigTranslationIfNeeded(loc) {
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

export {
    addConfigContent,
    fetchConfigContentIfNeeded,
    addConfigTranslation,
    fetchConfigTranslationIfNeeded
};
