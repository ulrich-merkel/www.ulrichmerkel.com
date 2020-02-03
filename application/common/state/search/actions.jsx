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
 * @requires common/state/search/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { SEARCH_CHANGE_TERM } from './constants';

/**
 * Handle search term state change.
 *
 * @function
 * @param {string} term - The search input value
 * @returns {object} The redux action playload
 */
function changeSearchTerm(term) {
    return {
        type: SEARCH_CHANGE_TERM,
        term
    };
}

export {
    changeSearchTerm
};
