import configureMockStore from 'redux-mock-store';

import { colorSchemeData } from '../data/color-scheme-data';
import { configData } from '../data/config-data';
import { contactData } from '../data/contact-data';
import { csrfData } from '../data/csrf-data';
import { dialogData } from '../data/dialog-data';

import { COLOR_SCHEME_RESOURCE_NAME } from '../../common/state/color-scheme/duck';
import { CONFIG_RESOURCE_NAME } from '../../common/state/config/duck';
import { CONTACT_RESOURCE_NAME } from '../../common/state/contact/duck';
import { CSRF_RESOURCE_NAME } from '../../common/state/csrf/duck';
import { DIALOG_RESOURCE_NAME } from '../../common/state/dialog/duck';

/**
 * Create a "fake" redux state with mocked test data.
 *
 * @type {object<string, object>}
 */
export const mockState = {
    [COLOR_SCHEME_RESOURCE_NAME]: colorSchemeData,
    [CONFIG_RESOURCE_NAME]: configData,
    [CONTACT_RESOURCE_NAME]: contactData,
    [CSRF_RESOURCE_NAME]: csrfData,
    [DIALOG_RESOURCE_NAME]: dialogData
};

/**
 * Get mocked redux store for testing purposes.
 *
 * @param {object} [state=mockState] - The dummy redux state to be used
 * @returns {object} The mocked redux store
 */
export function getMockedStore(state = mockState) {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    return store;
}
