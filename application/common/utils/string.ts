/**
 * Es6 module for handling string related utilities.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isString } from 'lodash';

/**
 * Check if given "input" is a valid string with at least one char.
 *
 * @param {*} string - The string to be checked
 * @returns {boolean} Whether this is a string with chars
 */
export function isValidString(string?: string): boolean {
    return isString(string) && string.length > 0;
}
