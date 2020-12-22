import { put, select, takeLatest, StrictEffect } from 'redux-saga/effects';

import { hasDarkModeEnabled } from '../../../client/feature-detect/has-dark-mode-enabled';
import {
    AVAILABLE_COLOR_SCHEMES,
    INITIAL_STATE,
    COLOR_SCHEME_TOGGLE_SELECTED_SAGA,
    COLOR_SCHEME_TOGGLE_SELECTED
} from './constants';
import { selectStateColorSchemeSelected } from './selector';
import { ChangeThemeSelectedActionType } from './types';

const { DARK, LIGHT } = AVAILABLE_COLOR_SCHEMES;

/**
 * Get current select color scheme value based on system settings
 * and initial redux state.
 */
export function* toggleColorSchemeSelectedSaga(): Generator<ChangeThemeSelectedActionType> {
    const currentSelected = yield select(selectStateColorSchemeSelected);
    const systemSetting = hasDarkModeEnabled() ? DARK : LIGHT;
    const selected =
        currentSelected === INITIAL_STATE.payload.selected
            ? systemSetting
            : currentSelected;

    yield put({ selected, type: COLOR_SCHEME_TOGGLE_SELECTED });
}

/**
 * The main saga watcher for handling side effects.
 */
export function* watchColorScheme(): Generator<StrictEffect> {
    yield takeLatest(
        COLOR_SCHEME_TOGGLE_SELECTED_SAGA,
        toggleColorSchemeSelectedSaga
    );
}
