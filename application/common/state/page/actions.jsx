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
 * @requires common/state/page/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { PAGE_INCREASE_VIEWS } from './constants';

/**
 * Handle page view increment state change.
 *
 * @function
 * @returns {object} The redux action playload
 */
function addPageView() {
    return {
        type: PAGE_INCREASE_VIEWS,
        increase: 'increase'
    };
}

export { addPageView };
