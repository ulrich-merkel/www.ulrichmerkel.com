/* eslint-disable import/prefer-default-export, arrow-parens */
/**
 * Es6 module for Redux Architecture.
 * This file creates a memoized selector, just passing new props if the
 * state is mutated to prevent superflous rerenderings.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires reselect
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { createSelector } from 'reselect';
import {
    STATE_THEME_DEFAULT_STATE,
    STATE_THEME_RESOURCE_NAME
} from './constants';

/**
 * Select dialog visible state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The dialog visiblity state
 */
const selectStateThemeSelected = createSelector(
    [
        (state) => state[STATE_THEME_RESOURCE_NAME]
    ],
    (theme) => {
        if (!theme) {
            return STATE_THEME_DEFAULT_STATE.selected;
        }
        return theme.selected;
    }
);

export {
    selectStateThemeSelected
};
