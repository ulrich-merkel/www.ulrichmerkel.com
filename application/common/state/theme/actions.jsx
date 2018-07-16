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
import {
    STATE_THEME_SELECTED_CHANGE
} from './constants';

/**
 * Handle theme switch state change.
 *
 * @param {string} selected - The new selected theme state
 * @returns {Object} The redux action playload
 */
function changeThemeSelected(selected) {
    return {
        type: STATE_THEME_SELECTED_CHANGE,
        selected
    };
}

export {
    changeThemeSelected
};
