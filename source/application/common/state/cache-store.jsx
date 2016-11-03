import configApplication from './../config/application';
import xor from './../utils/xor';
import logger from './../utils/logger';
import WebStorage from './../utils/web-storage';

const webStorage = new WebStorage();
const xorUse = configApplication.xor.use;
const xorKey = configApplication.xor.key;

/**
 * Return undefined to let reducers init application default state
 *
 * @function
 * @returns {Object|undefined}
 */
function loadState() {
    const serializedState = webStorage.read('state');

    if (serializedState === null) {
        return undefined;
    }

    /**
     * Parsing could fail if we change the xor key or the stored data is corrupt,
     * so we have to use try catch here even this reduces performance
     */
    try {
        return JSON.parse(
            xorUse ? xor.decrypt(serializedState, xorKey) : serializedState
        );
    } catch (reason) {
        logger.warn(reason);
        return undefined;
    }

}

/**
 * Return undefined to let reducers init application default state
 *
 * @function
 * @param {Object} state
 * @returns {void}
 */
function saveState(state) {
    webStorage.save(
        'state',
        xorUse
            ? xor.encrypt(JSON.stringify(state), xorKey)
            : JSON.stringify(state)
    );
}

export {
    loadState,
    saveState
};
