/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://www.joshwcomeau.com/react/dark-mode/}
 */
import { createSelector } from 'reselect';
import { get, isEmpty } from 'lodash';

import { hasDarkModeEnabled } from '../../../client/feature-detect/has-dark-mode-enabled';
import { RootState } from '../root-reducer';
import {
    AVAILABLE_COLOR_SCHEMES,
    COLOR_SCHEME_RESOURCE_NAME,
    INITIAL_STATE
} from './constants';
import { AvailableColorSchemesType, ColorSchemeStateType } from './types';

/**
 * Select complete color scheme state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {object} The color scheme state
 */
export const selectStateColorScheme = createSelector(
    [(state: RootState) => state?.[COLOR_SCHEME_RESOURCE_NAME]],
    function resultFunc(
        colorScheme: ColorSchemeStateType
    ): ColorSchemeStateType {
        return isEmpty(colorScheme) ? INITIAL_STATE : colorScheme;
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
    function resultFunc(
        colorScheme: ColorSchemeStateType
    ): AvailableColorSchemesType {
        return get(
            colorScheme,
            'payload.selected',
            INITIAL_STATE.payload.selected
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
export const selectStateColorSchemeSelectedDarkMode = createSelector(
    [selectStateColorSchemeSelected],
    function resultFunc(
        colorSchemeSelected: AvailableColorSchemesType
    ): boolean {
        if (colorSchemeSelected === INITIAL_STATE.payload.selected) {
            return hasDarkModeEnabled();
        }

        return colorSchemeSelected === AVAILABLE_COLOR_SCHEMES.DARK;
    }
);
