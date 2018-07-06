import { isFunction } from 'lodash';

/**
 * Check if we have a valid browser event object
 * with the function needed to be called.
 *
 * @private
 * @param {Object} event - The current event object
 * @param {Function} functionToCall - The event function to be checked
 * @returns {boolean} Whether this is a valid event
 */
function isValidEvent(event, functionToCall) {
    return event && isFunction(event[functionToCall]);
}

/**
 * Handle form submit event.
 *
 * @function
 * @param {Object} event - The current event object
 * @returns {void}
 */
function eventPreventDefault(event) {
    if (isValidEvent(event, 'preventDefault')) {
        event.preventDefault();
    }
}

/**
 * Handle form submit event.
 *
 * @function
 * @param {Object} event - The current event object
 * @returns {void}
 */
function eventStopPropagation(event) {
    if (isValidEvent(event, 'eventStopPropagation')) {
        event.eventStopPropagation();
    }
}

export {
    eventPreventDefault,
    eventStopPropagation
};
