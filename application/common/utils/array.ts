/**
 * Es6 module for handling array related utilities.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */

/**
 * Check if given "input" is a valid array with at least one entry.
 *
 * @param {Array<*>} array - The array to be checked
 * @returns {boolean} Whether this is an array with some entries
 */
export function isValidArray(array?: any[]): boolean {
    return Array.isArray(array) && array.length > 0;
}
