import configureMockStore from 'redux-mock-store';
import { Store } from 'redux';

import { colorSchemeStateData } from '../data/color-scheme-state-data';
import { configStateData } from '../data/config-state-data';
import { contactStateData } from '../data/contact-state-data';
import { csrfStateData } from '../data/csrf-state-data';
import { dialogStateData } from '../data/dialog-state-data';
import { intlStateData } from '../data/intl-state-data';
import { pageStateData } from '../data/page-state-data';
import { scrollStateData } from '../data/scroll-state-data';
import { searchStateData } from '../data/search-state-data';

import { COLOR_SCHEME_RESOURCE_NAME } from '../../common/state/color-scheme/duck';
import { CONFIG_RESOURCE_NAME } from '../../common/state/config/duck';
import { CONTACT_RESOURCE_NAME } from '../../common/state/contact/duck';
import { CSRF_RESOURCE_NAME } from '../../common/state/csrf/duck';
import { DIALOG_RESOURCE_NAME } from '../../common/state/dialog/duck';
import { INTL_RESOURCE_NAME } from '../../common/state/intl/duck';
import { PAGE_RESOURCE_NAME } from '../../common/state/page/duck';
import { SCROLL_RESOURCE_NAME } from '../../common/state/scroll/duck';
import { SEARCH_RESOURCE_NAME } from '../../common/state/search/duck';

import { RootState } from '../../common/state/configure-store';

/**
 * Create a "fake" redux state with mocked test data.
 *
 * @type {object<string, object>}
 */
export const mockState: RootState = {
    [COLOR_SCHEME_RESOURCE_NAME]: colorSchemeStateData,
    [CONFIG_RESOURCE_NAME]: configStateData,
    [CONTACT_RESOURCE_NAME]: contactStateData,
    [CSRF_RESOURCE_NAME]: csrfStateData,
    [DIALOG_RESOURCE_NAME]: dialogStateData,
    [INTL_RESOURCE_NAME]: intlStateData,
    [PAGE_RESOURCE_NAME]: pageStateData,
    [SCROLL_RESOURCE_NAME]: scrollStateData,
    [SEARCH_RESOURCE_NAME]: searchStateData
};

/**
 * Get mocked redux store for testing purposes.
 *
 * @param {object} [state=mockState] - The dummy redux state to be used
 * @returns {object} The mocked redux store
 */
export function getMockedStore(state: RootState = mockState): Store {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    return store;
}
