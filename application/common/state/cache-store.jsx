/**
 * Es6 module for Redux Architecture.
 * This file takes care for loading and storing the redux store state in a
 * web-storage (local storage) to improve initial loading time.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires common/config/application
 * @requires common/utils/xor
 * @requires common/utils/logger
 * @requires common/utils/web-storage
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import { configApplication } from '../config/application';
import { decrypt, encrypt } from '../utils/xor';
import { logger } from '../utils/logger';
import WebStorage from '../utils/web-storage';

const webStorage = new WebStorage();
const xorUse = configApplication.xor.use;
const xorKey = configApplication.xor.key;
const stateKey = 'state';

/**
 * Load saved state and return undefined to let reducers init
 * application default state.
 *
 * @function
 * @returns {object|undefined}
 */
function loadState() {
    const serializedState = webStorage.read(stateKey);

    if (serializedState === null) {
        return undefined;
    }

    /**
     * Parsing could fail if we change the xor key or the stored data is corrupt,
     * so we have to use try catch here even this reduces performance
     */
    try {
        return JSON.parse(
            xorUse ? decrypt(serializedState, xorKey) : serializedState
        );
    } catch (reason) {
        logger.warn(reason);
        return undefined;
    }
}

/**
 * Save the given application state.
 *
 * @function
 * @param {object} state - The state object to be saved
 * @returns {void}
 */
function saveState(state) {
    webStorage.save(
        stateKey,
        xorUse ? encrypt(JSON.stringify(state), xorKey) : JSON.stringify(state)
    );
}

export { loadState, saveState, stateKey };
