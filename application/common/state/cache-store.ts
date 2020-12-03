/**
 * Es6 module for Redux Architecture.
 * This file takes care for loading and storing the redux store state in a
 * web-storage (local storage) to improve initial loading time.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { configApplication } from '../config/application';
import { decrypt, encrypt } from '../utils/xor';
import { logger } from '../utils/logger';
import { WebStorage } from '../utils/web-storage';
import { RootState } from './root-reducer';

const webStorage = new WebStorage();
const xorUse = configApplication.xor.use;
const xorKey = configApplication.xor.key;

/**
 * @type {string}
 */
export const stateKey = 'state';

/**
 * Load saved state and return undefined to let reducers init
 * application default state.
 *
 * @returns {object|undefined} The complete redux state if available
 */
export function loadState(): RootState | undefined {
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
 * @param {object} state - The state object to be saved
 * @returns {void}
 */
export function saveState(state: RootState): void {
    webStorage.save(
        stateKey,
        xorUse ? encrypt(JSON.stringify(state), xorKey) : JSON.stringify(state)
    );
}
