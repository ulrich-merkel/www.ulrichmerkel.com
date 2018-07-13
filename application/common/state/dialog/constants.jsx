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

/**
 * @type {string}
 */
export const STATE_DIALOG_VISIBLE_CHANGE = 'STATE_DIALOG_VISIBLE_CHANGE';
export const STATE_DIALOG_PAGE_BROADCAST = 'STATE_DIALOG_PAGE_BROADCAST';
export const STATE_DIALOG_PAGE_SEARCH = 'STATE_DIALOG_PAGE_SEARCH';
export const STATE_DIALOG_PAGE_THEME = 'STATE_DIALOG_PAGE_THEME';
