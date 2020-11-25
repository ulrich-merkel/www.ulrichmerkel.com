/**
 * Es6 module for removing css class names.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isValidArray } from '../../common/utils/array';

/**
 * Get class names to be removed to dom.
 *
 * @param {Array<string>} [availableClassNames] - All class names to be added
 * @param {string} [selectedClassName] - Current active/selected class name
 * @param {string} [classNamePrefix] - Css class name prefix
 * @returns {Array<string>} The combined class names
 */
export function getClassNamesToRemove(
    availableClassNames?: string[],
    selectedClassName?: string,
    classNamePrefix?: string
): string[] {
    if (!isValidArray(availableClassNames)) {
        return [];
    }

    return availableClassNames
        .filter(function filterAvailableClassNames(className) {
            return className !== selectedClassName;
        })
        .map(function mapAvailableThemes(className) {
            return [classNamePrefix, className].filter(Boolean).join('-');
        })
        .filter(Boolean);
}
