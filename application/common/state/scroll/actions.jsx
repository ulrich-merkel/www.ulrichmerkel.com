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
 * @requires common/state/scroll/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { SCROLL_HEADER_FIXED, SCROLL_HEADER_VISIBLE } from './constants';

/**
 * Handle header fixed state change.
 *
 * @function
 * @param {boolean} headerFixed - Whether the header should be displayed fixed or not
 * @returns {Object} The redux action playload
 */
function changeHeaderFixed(headerFixed) {
    return {
        type: SCROLL_HEADER_FIXED,
        headerFixed
    };
}

/**
 * Handle header visible state change.
 *
 * @function
 * @param {boolean} headerVisible - Whether the header is visible or not
 * @returns {Object} The redux action playload
 */
function changeHeaderVisible(headerVisible) {
    return {
        type: SCROLL_HEADER_VISIBLE,
        headerVisible
    };
}

export {
    changeHeaderFixed,
    changeHeaderVisible
};
