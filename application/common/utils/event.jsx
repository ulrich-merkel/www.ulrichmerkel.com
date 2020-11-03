/**
 * Es6 module for handling event helpers.
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
 * - 0.0.1 Basic function and structure
 */
import { isFunction } from 'lodash';

const PREVENT_DEFAULT = 'preventDefault';
const STOP_PROPAGATION = 'stopPropagation';

/**
 * Check if we have a valid browser event object
 * with the function needed to be called.
 *
 * @private
 * @param {object} event - The current event object
 * @param {Function} functionToCall - The event function to be checked
 * @returns {boolean} Whether this is a valid event
 */
function isValidEvent(event, functionToCall) {
    return event && isFunction(event[functionToCall]);
}

/**
 * Handle form submit event.
 *
 * @param {object} event - The current event object
 * @returns {void}
 */
function eventPreventDefault(event) {
    if (isValidEvent(event, PREVENT_DEFAULT)) {
        event[PREVENT_DEFAULT]();
    }
}

/**
 * Handle form submit event.
 *
 * @param {object} event - The current event object
 * @returns {void}
 */
function eventStopPropagation(event) {
    if (isValidEvent(event, STOP_PROPAGATION)) {
        event[STOP_PROPAGATION]();
    }
}

export {
    eventPreventDefault,
    eventStopPropagation
};
