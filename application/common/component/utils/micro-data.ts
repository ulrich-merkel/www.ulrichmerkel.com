/**
 * Es6 module for creating mirco data attributes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isValidString } from '../../utils/string';

type ItemTypeAttributes = {
    itemScope: boolean;
    itemType: string;
};

/**
 * Get component properties for itemProp and itemType.
 *
 * @param {boolean} itemType - The itemType property if available
 * @returns {object|null} The component props for spreading
 */
export function getItemTypeAttributes(
    itemType?: string
): ItemTypeAttributes | null {
    return isValidString(itemType)
        ? {
              itemScope: true,
              itemType
          }
        : null;
}
