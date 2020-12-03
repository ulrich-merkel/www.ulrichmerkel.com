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

import { RootState } from '../configure-store';
import {
    initialState,
    COLOR_SCHEME_RESOURCE_NAME,
    COLOR_SCHEME_DARK
} from './duck';
import { ColorSchemeStateType } from './types';

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
    function resultFunc(colorScheme: ColorSchemeStateType): string {
        return get(
            colorScheme,
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
export const selectStateColorSchemeSelectedDarkMode = createSelector(
    [selectStateColorSchemeSelected],
    function resultFunc(colorSchemeSelected: string): boolean {
        return colorSchemeSelected === COLOR_SCHEME_DARK;
    }
);
