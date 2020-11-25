import { isFunction } from 'lodash';

/**
 * Check if param is a callable function and invoke it.
 *
 * @param {Function} callback - The function to be checked
 * @param {*} [result] - The optional function parameter
 * @returns {void}
 */
export function callFn(callback: Function, result) {
    if (isFunction(callback)) {
        callback.call(result);
    }
}
