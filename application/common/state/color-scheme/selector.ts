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

import { initialState, COLOR_SCHEME_RESOURCE_NAME } from './duck';
import { ColorSchemeStateType } from './types';

/**
 * Select complete color scheme state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The color scheme state
 */
export const selectStateColorScheme = createSelector(
    [(state) => state?.[COLOR_SCHEME_RESOURCE_NAME]],
    function (colorScheme: ColorSchemeStateType): ColorSchemeStateType {
        return isEmpty(colorScheme) ? initialState : colorScheme;
    }
);

/**
 * Select selected color scheme.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {string} The selected color scheme state
 */
export const selectStateColorSchemeSelected = createSelector(
    [selectStateColorScheme],
    function (colorScheme: ColorSchemeStateType): string {
        return get(
            colorScheme,
            'payload.selected',
            initialState.payload.selected
        );
    }
);
