/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { createSelector } from 'reselect';
import { get, isEmpty } from 'lodash';

import { RootState } from '../configure-store';
import {
    initialState,
    REDUCED_MOTION_RESOURCE_NAME,
    AVAILABLE_MOTION_PREFERENCES
} from './duck';
import { AvailableReducedMotionsType, ReducedMotionStateType } from './types';
import { hasReducedMotionEnabled } from '../../../client/feature-detect/has-reduced-motion-enabled';

/**
 * Select complete color scheme state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The color scheme state
 */
export const selectStateReducedMotion = createSelector(
    [(state: RootState) => state?.[REDUCED_MOTION_RESOURCE_NAME]],
    function resultFunc(
        reducedMotion: ReducedMotionStateType
    ): ReducedMotionStateType {
        return isEmpty(reducedMotion) ? initialState : reducedMotion;
    }
);

/**
 * Select selected color scheme.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The selected color scheme state
 */
export const selectStateReducedMotionSelected = createSelector(
    [selectStateReducedMotion],
    function resultFunc(
        reducedMotion: ReducedMotionStateType
    ): AvailableReducedMotionsType {
        return get(
            reducedMotion,
            'payload.selected',
            initialState.payload.selected
        );
    }
);

/**
 * Select selected color scheme.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The selected color scheme state
 */
export const selectStateReducedMotionSelectedReduce = createSelector(
    [selectStateReducedMotionSelected],
    function resultFunc(
        reducedMotionSelected: AvailableReducedMotionsType
    ): boolean {
        if (reducedMotionSelected === initialState.payload.selected) {
            return hasReducedMotionEnabled();
        }
        return reducedMotionSelected === AVAILABLE_MOTION_PREFERENCES.REDUCE;
    }
);
