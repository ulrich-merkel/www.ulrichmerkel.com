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

/**
 * Select dialog visible state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The dialog visiblity state
 */
const selectStateDialogVisible = createSelector(
    [
        (state) => state.dialog
    ],
    (dialog) => {
        if (!dialog || !dialog.visible) {
            return false;
        }
        return dialog.visible;
    }
);

/**
 * Select dialog page state from redux store.
 *
 * @function
 * @param {object} state - The current redux state
 * @returns {boolean} The dialog visiblity state
 */
const selectStateDialogPage = createSelector(
    [
        (state) => state.dialog
    ],
    (dialog) => {
        if (!dialog || !dialog.page) {
            return false;
        }
        return dialog.page;
    }
);

export {
    selectStateDialogVisible,
    selectStateDialogPage
};
