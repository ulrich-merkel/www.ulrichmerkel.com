import { combineReducers } from 'redux';

import { reducerColorScheme } from './color-scheme/duck';
import { reducerConfig } from './config/duck';
import { reducerContact } from './contact/duck';
import { reducerCsrf } from './csrf/duck';
import { reducerDialog } from './dialog/duck';
import { reducerIntl } from './intl/duck';
import { reducerPage } from './page/duck';
import { reducerReducedMotion } from './reduced-motion/duck';
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
 */
export const rootReducer = combineReducers({
    ...reducerColorScheme,
    ...reducerConfig,
    ...reducerContact,
    ...reducerCsrf,
    ...reducerDialog,
    ...reducerIntl,
    ...reducerPage,
    ...reducerReducedMotion,
    ...reducerScroll,
    ...reducerSearch
});

export type RootState = ReturnType<typeof rootReducer>;
