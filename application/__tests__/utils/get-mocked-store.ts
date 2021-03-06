import configureMockStore from 'redux-mock-store';
import { Store } from 'redux';

import { colorSchemeStateData } from '../data/color-scheme-state-data';
import { configStateData } from '../data/config-state-data';
import { contactStateData } from '../data/contact-state-data';
import { csrfStateData } from '../data/csrf-state-data';
import { dialogStateData } from '../data/dialog-state-data';
import { intlStateData } from '../data/intl-state-data';
import { pageStateData } from '../data/page-state-data';
import { reducedMotionStateData } from '../data/reduced-motion-state-data';
import { scrollStateData } from '../data/scroll-state-data';
import { searchStateData } from '../data/search-state-data';

import { COLOR_SCHEME_RESOURCE_NAME } from '../../common/state/color-scheme/constants';
import { CONFIG_RESOURCE_NAME } from '../../common/state/config/constants';
import { CONTACT_RESOURCE_NAME } from '../../common/state/contact/constants';
import { CSRF_RESOURCE_NAME } from '../../common/state/csrf/constants';
import { DIALOG_RESOURCE_NAME } from '../../common/state/dialog/constants';
import { INTL_RESOURCE_NAME } from '../../common/state/intl/constants';
import { PAGE_RESOURCE_NAME } from '../../common/state/page/constants';
import { REDUCED_MOTION_RESOURCE_NAME } from '../../common/state/reduced-motion/constants';
import { SCROLL_RESOURCE_NAME } from '../../common/state/scroll/constants';
import { SEARCH_RESOURCE_NAME } from '../../common/state/search/constants';

import { RootState } from '../../common/state/root-reducer';

/**
 * Create a "fake" redux state with mocked test data.
 *
 * @type {object<string, object>}
 */
export const mockedState: RootState = {
    [COLOR_SCHEME_RESOURCE_NAME]: colorSchemeStateData,
    [CONFIG_RESOURCE_NAME]: configStateData,
    [CONTACT_RESOURCE_NAME]: contactStateData,
    [CSRF_RESOURCE_NAME]: csrfStateData,
    [DIALOG_RESOURCE_NAME]: dialogStateData,
    [INTL_RESOURCE_NAME]: intlStateData,
    [PAGE_RESOURCE_NAME]: pageStateData,
    [REDUCED_MOTION_RESOURCE_NAME]: reducedMotionStateData,
    [SCROLL_RESOURCE_NAME]: scrollStateData,
    [SEARCH_RESOURCE_NAME]: searchStateData
};

/**
 * Get mocked redux store for testing purposes.
 *
 * @param {object} [state=mockedState] - The dummy redux state to be used
 * @returns {object} The mocked redux store
 */
export function getMockedStore(state: RootState = mockedState): Store {
    const mockStore = configureMockStore();
    const store = mockStore(state);

    return store;
}
