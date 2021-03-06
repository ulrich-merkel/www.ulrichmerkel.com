/* eslint-disable import/no-mutable-exports, immutable/no-let */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
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
export let getDateNow = function getDateNowFn(): number {
    if (typeof performance !== 'undefined' && isFunction(performance.now)) {
        getDateNow = function getDateNowPerformance(): number {
            return performance.now();
        };
    } else {
        getDateNow = function getDateNowDate(): number {
            return Date.now();
        };
    }

    return getDateNow();
};
