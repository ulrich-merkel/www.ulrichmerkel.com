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
import { DIALOG_CHANGE_VISIBLE } from './constants';

/**
 * Handle dialog visibility state change.
 *
 * @function
 * @param {boolean} visible - The new visible state
 * @returns {Object} The redux action playload
 */
function changeDialogVisible(visible) {
    return {
        type: DIALOG_CHANGE_VISIBLE,
        visible
    };
}

export {
    changeDialogVisible
};
