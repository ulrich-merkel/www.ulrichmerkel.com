/* eslint-disable no-underscore-dangle */
/**
 * Es6 module for Redux Architecture.
 * This file sets up the redux store and combines all single reducers into a
 * global one.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires redux
 * @requires redux-thunk
 * @requires redux-logger
 * @requires lodash
 * @requires common/config/application
 * @requires common/utils/environment
 * @requires common/state/cache-store
 * @requires common/state/config/reducer
 * @requires common/state/contact/reducer
 * @requires common/state/csrf/reducer
 * @requires common/state/dialog/reducer
 * @requires common/state/intl/reducer
 * @requires common/state/page/reducer
 * @requires common/state/scroll/reducer
 * @requires common/state/scroll/reducer
 * @requires common/state/config/actions
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { omit, get } from 'lodash';

import { debug } from './../config/application';
import { isBrowser } from './../utils/environment';
import { loadState, saveState } from './cache-store';
import config from './config/reducer';
import contact from './contact/reducer';
import csrf from './csrf/reducer';
import dialog from './dialog/reducer';
import intl from './intl/reducer';
import page from './page/reducer';
import scroll from './scroll/reducer';
import search from './search/reducer';
import {
    fetchConfigContentIfNeeded,
    fetchConfigTranslationIfNeeded
} from './../state/config/actions';

/**
 * Creating the single application store.
 *
 * The combineReducers helper function turns an object whose values are
 * different reducing functions into a single reducing function you can
 * pass to createStore.
 *
 * The resulting reducer calls every child reducer, and gathers their
 * results into a single state object. The shape of the state object matches
 * the keys of the passed reducers.
 *
 * @private
 */
const reducers = combineReducers({
    config,
    contact,
    csrf,
    dialog,
    intl,
    page,
    scroll,
    search
});

// neat middleware that logs actions
const loggerMiddleware = createLogger();

/**
 * Creates a Redux store that holds the complete state tree of your app.
 * There should only be a single store in your app.
 *
 * @function
 * @param {Object} [preloadedState={}] - Initial store config to reduce the payload on load
 * @returns {Object} The newly created store
 */
function configureStore(preloadedState = {}) {

    // thunkMiddleware let's us dispatch() async functions
    let middlewares = [thunkMiddleware]; // eslint-disable-line prefer-const, immutable/no-let
    if (debug && isBrowser()) {
        middlewares.push(loggerMiddleware);
    }

    // create store with cached data
    const store = createStore(
        reducers,
        Object.assign(
            {},
            preloadedState,
            loadState()
        ),
        applyMiddleware(...middlewares)
    );

    // listen to changes to save state in cache
    store.subscribe(() => {
        const stateToSave = omit(store.getState(), ['csrf', 'page']);
        saveState(stateToSave);
    });

    // fetch inital data if not already passed as preloadedState
    store.dispatch(fetchConfigContentIfNeeded());
    store.dispatch(fetchConfigTranslationIfNeeded(get(store.getState(), 'intl.locale')));

    return store;

}

export default configureStore;
