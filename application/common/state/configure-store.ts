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
import { omit } from 'lodash';

import { debug } from '../config/application';
import { isBrowser } from '../utils/environment';
import { loadState, saveState } from './cache-store';
import { reducerColorScheme } from './color-scheme/duck';
import {
    reducerConfig,
    fetchConfigContentIfNeeded,
    fetchConfigTranslationIfNeeded
} from './config/duck';
import { reducerContact } from './contact/duck';
import { reducerCsrf } from './csrf/duck';
import { reducerDialog } from './dialog/duck';
import { reducerIntl } from './intl/duck';
import { selectStateIntlLocale } from './intl/selector';
import { reducerPage } from './page/duck';
import { reducerScroll } from './scroll/duck';
import { reducerSearch } from './search/duck';

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
export const rootReducer = combineReducers({
    ...reducerColorScheme,
    ...reducerConfig,
    ...reducerContact,
    ...reducerCsrf,
    ...reducerDialog,
    ...reducerIntl,
    ...reducerPage,
    ...reducerScroll,
    ...reducerSearch
});

export type RootState = ReturnType<typeof rootReducer>;

// Neat middleware that logs actions
const loggerMiddleware: Function = createLogger();

/**
 * Creates a Redux store that holds the complete state tree of your app.
 * There should only be a single store in your app.
 *
 * @param {object} [preloadedState={}] - Initial store config to reduce the payload on load
 * @returns {object} The newly created store
 */
export function configureStore(preloadedState: rootReducer = {}) {
    // ThunkMiddleware let's us dispatch() async functions
    // eslint-disable-next-line prefer-const, immutable/no-let
    let middlewares = [thunkMiddleware];
    if (debug && isBrowser()) {
        middlewares.push(loggerMiddleware);
    }

    // Create store with cached data
    const store = createStore(
        rootReducer,
        {
            ...preloadedState,
            ...loadState()
        },
        applyMiddleware(...middlewares)
    );

    const { dispatch, getState, subscribe } = store;

    // Listen to changes to save state in cache
    subscribe(function () {
        const stateToSave = omit(getState(), ['csrf', 'page']);
        saveState(stateToSave);
    });

    // Fetch inital data if not already passed as preloadedState
    dispatch(fetchConfigContentIfNeeded());
    dispatch(fetchConfigTranslationIfNeeded(selectStateIntlLocale(getState())));

    return store;
}
