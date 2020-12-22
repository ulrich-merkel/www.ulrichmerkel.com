import { put, select, takeLatest, StrictEffect } from 'redux-saga/effects';

import { hasReducedMotionEnabled } from '../../../client/feature-detect/has-reduced-motion-enabled';
import {
    AVAILABLE_MOTION_PREFERENCES,
    INITIAL_STATE,
    REDUCED_MOTION_TOGGLE_SELECTED_SAGA,
    REDUCED_MOTION_TOGGLE_SELECTED
} from './constants';
import { selectStateReducedMotionSelected } from './selector';
import { ChangeReducedMotionSelectedActionType } from './types';

const { NO_PREFERENCE, REDUCE } = AVAILABLE_MOTION_PREFERENCES;

/**
 * Get current select reduced motion value based on system settings
 * and initial redux state.
 */
export function* toggleReducedMotionSelectedSaga(): Generator<ChangeReducedMotionSelectedActionType> {
    const currentSelected = yield select(selectStateReducedMotionSelected);
    const systemSetting = hasReducedMotionEnabled() ? REDUCE : NO_PREFERENCE;
    const selected =
        currentSelected === INITIAL_STATE.payload.selected
            ? systemSetting
            : currentSelected;

    yield put({ selected, type: REDUCED_MOTION_TOGGLE_SELECTED });
}

/**
 * The main saga watcher for handling side effects.
 */
export function* watchReducedMotion(): Generator<StrictEffect> {
    yield takeLatest(
        REDUCED_MOTION_TOGGLE_SELECTED_SAGA,
        toggleReducedMotionSelectedSaga
    );
}
