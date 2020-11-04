/* eslint-disable import/prefer-default-export, import/no-mutable-exports, immutable/no-let */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires lodash
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */
import { isFunction } from 'lodash';

/**
 * Get actual date helper by performance or classical date object.
 *
 * Following the lazy loading design pattern, the current function will be
 * overridden with the correct implementation the first time it will be
 * called. After that all consequent calls deliver the correct one without
 * conditions for different browser capabilities.
 *
 * @see Nicholas C. Zakas, High Performance JavaScript (Page 154)
 *
 * @function
 * @returns {number} The current timestamp
 */
let getDateNow = function getDateNowFn() {
    if (typeof performance !== 'undefined' && isFunction(performance.now)) {
        getDateNow = function getDateNowPerformance() {
            return performance.now();
        };
    } else {
        getDateNow = function getDateNowDate() {
            return Date.now();
        };
    }

    return getDateNow();
};

export { getDateNow };
