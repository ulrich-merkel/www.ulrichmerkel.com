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
 * @requires common/state/intl/constants
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { INTL_CHANGE_LOCALE } from './constants';

/**
 * Handle locale string state change.
 *
 * @function
 * @param {string} locale - The new locale
 * @param {string} fallback - The fallback locale if new locale is not available
 * @returns {object} The redux action playload
 */
function changeLocale(locale, fallback) {
    return {
        type: INTL_CHANGE_LOCALE,
        locale,
        fallback
    };
}

export {
    changeLocale
};
