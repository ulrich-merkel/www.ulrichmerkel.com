/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { omit } from 'lodash';

import { debug } from './../config/application';
import { isBrowser } from './../utils/environment';
import {
    fetchConfigContentIfNeeded,
    fetchConfigTranslationIfNeeded
} from './../state/config/actions';

import { loadState, saveState } from './cache-store';
import config from './config/reducer';
import contact from './contact/reducer';
import csrf from './csrf/reducer';
import dialog from './dialog/reducer';
import intl from './intl/reducer';
import page from './page/reducer';
import scroll from './scroll/reducer';
import search from './search/reducer';

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

const loggerMiddleware = createLogger();

/**
 * Creates a Redux store that holds the complete state tree of your app.
 * There should only be a single store in your app.
 *
 * @function
 * @param {}
 * @param {}
 * @returns {}
 */
function configureStore(preloadedState = {}) {

    // thunkMiddleware let's us dispatch() async functions
    let middlewares = [thunkMiddleware]; // eslint-disable-line prefer-const
    if (debug && isBrowser()) {
        // neat middleware that logs actions
        middlewares.push(loggerMiddleware);
    }

    // create store with cached data
    const store = createStore(
        reducers,
        Object.assign({}, preloadedState, loadState()),
        applyMiddleware(...middlewares)
    );

    // listen to changes to save state in cache
    store.subscribe(() => {
        const stateToSave = omit(store.getState(), ['csrf', 'page']);
        saveState(stateToSave);
    });

    // fetch inital data if not already passed as preloadedState
    store.dispatch(fetchConfigContentIfNeeded());
    store.dispatch(fetchConfigTranslationIfNeeded('en-EN'));

    return store;

}

export default configureStore;
