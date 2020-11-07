/**
 * Es6 module for handling event helpers.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isFunction } from 'lodash';

/**
 * @type {string}
 */
const PREVENT_DEFAULT = 'preventDefault';

/**
 * @type {string}
 */
const STOP_PROPAGATION = 'stopPropagation';

/**
 * Check if we have a valid browser event object
 * with the function needed to be called.
 *
 * @private
 * @param {object} event - The current event object
 * @param {string} functionToCall - The event function to be checked
 * @returns {boolean} Whether this is a valid event
 */
function isValidEvent(event: CustomEvent, functionToCall: string): boolean {
    return event && isFunction(event[functionToCall]);
}

/**
 * Handle form submit event.
 *
 * @param {object} event - The current event object
 * @returns {void}
 */
export function eventPreventDefault(event: CustomEvent): void {
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
export function eventStopPropagation(event: CustomEvent): void {
    if (isValidEvent(event, STOP_PROPAGATION)) {
        event[STOP_PROPAGATION]();
    }
}
