/**
 * Es6 module for creating test id related attributes
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isValidString } from '../../utils/string';

type TestIdAttributes = {
    'data-testid': string;
};

/**
 * Get component properties for testing.
 *
 * @param {string} testId - The test id to be added
 * @returns {object|null} The component props for spreading
 */
export function getTestIdAttributes(testId?: string): TestIdAttributes | null {
    return isValidString(testId)
        ? {
              'data-testid': testId
          }
        : null;
}
