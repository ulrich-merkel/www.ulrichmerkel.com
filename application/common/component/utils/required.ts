/**
 * Es6 module for creating form input required attributes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isBoolean } from 'lodash';

type RequiredAttributes = {
    'aria-required': boolean;
    required: boolean;
};

/**
 * Get component properties for required form input elements.
 *
 * @param {boolean} required - Whether the input element is required or not
 * @returns {object|null} The component props for spreading
 */
export function getRequiredAttributes(
    required?: boolean
): RequiredAttributes | null {
    return isBoolean(required) && required
        ? {
              'aria-required': true,
              required: true
          }
        : null;
}
