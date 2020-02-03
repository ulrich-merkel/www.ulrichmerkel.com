/* eslint-disable import/prefer-default-export */
/**
 * Es6 module for Redux Architecture.
 * Actions are payloads of information that send data from your application
 * to your store. They are the only source of information for the store. You
 * send them to the store using store.dispatch().
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires common/state/dialog/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
// @TODO Rename STATE_DIALOG_PAGE_BROADCAST to STATE_DIALOG_CONTENT_BROADCAST
import {
    STATE_DIALOG_VISIBLE_CHANGE,
    STATE_DIALOG_PAGE_BROADCAST,
    STATE_DIALOG_PAGE_SEARCH,
    STATE_DIALOG_PAGE_THEME
} from './constants';

/**
 * Handle dialog visibility state change.
 *
 * @function
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
function changeDialogVisible(visible) {
    return {
        type: STATE_DIALOG_VISIBLE_CHANGE,
        visible
    };
}

/**
 * Handle dialog visibility state change.
 *
 * @function
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
function changeDialogVisibleBroadcast(visible) {
    return {
        type: STATE_DIALOG_VISIBLE_CHANGE,
        page: STATE_DIALOG_PAGE_BROADCAST,
        visible
    };
}

/**
 * Handle dialog visibility state change.
 *
 * @function
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
function changeDialogVisibleSearch(visible) {
    return {
        type: STATE_DIALOG_VISIBLE_CHANGE,
        page: STATE_DIALOG_PAGE_SEARCH,
        visible
    };
}

/**
 * Handle dialog visibility state change.
 *
 * @function
 * @param {boolean} visible - The new visible state
 * @returns {object} The redux action playload
 */
function changeDialogVisibleTheme(visible) {
    return {
        type: STATE_DIALOG_VISIBLE_CHANGE,
        page: STATE_DIALOG_PAGE_THEME,
        visible
    };
}

export {
    changeDialogVisible,
    changeDialogVisibleBroadcast,
    changeDialogVisibleSearch,
    changeDialogVisibleTheme
};
