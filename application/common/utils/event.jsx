import { isFunction } from 'lodash';

/**
 * Handle form submit event.
 *
 * @function
 * @private
 * @param {Object} event - The current event object
 * @returns {void}
 */
function eventPreventDefault(event) {
    if (event && isFunction(event.preventDefault)) {
        event.preventDefault();
    }
}

export {
    eventPreventDefault
}