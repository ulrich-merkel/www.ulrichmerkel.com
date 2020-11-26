/**
 * Es6 module for adding css class names.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isValidArray } from '../../common/utils/array';

/**
 * Get class names to be added to dom.
 *
 * @param {Array<string>} [classNamesToAdd] - All class names to be added
 * @param {string} [classNamePrefix] - Css class name prefix
 * @returns {Array<string>} The combined class names
 */
export function getClassNamesToAdd(
    classNamesToAdd?: string[],
    classNamePrefix?: string
): string[] {
    if (!isValidArray(classNamesToAdd)) {
        return [];
    }

    return classNamesToAdd
        .reduce(function fnReduce(accumulator, className) {
            const combined = [classNamePrefix, className]
                .filter(Boolean)
                .join('-');
            accumulator.push(combined);
            return accumulator;
        }, [])
        .filter(Boolean);
}
