/**
 * Es6 module for controlling the html5 progress bar
 * and corresponding fallback.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { setDomNodeAttribute, setDomNodeClassName } from '../utils/dom';

const PROGRESS_BAR = 'm-progress';

/**
 * Generate an array from [0, 1, ..., 10] and add css className strings.
 *
 * @private
 * @type {Array<string>}
 */
const hasWidthClasses = Array.from(Array(11).keys()).map(function mapNumbers(
    number
) {
    return `has-width--${number * 10}`;
});

/**
 * Set progress bar values.
 *
 * @param {string} progress - The (number as string!) progress value to be set
 * @returns {void}
 */
export function displayProgress(progress: string): void {
    setDomNodeAttribute(PROGRESS_BAR, 'value', progress);
    setDomNodeClassName(
        `${PROGRESS_BAR}__fallback`,
        [`has-width--${Math.round(Number.parseInt(progress, 10) / 10) * 10}`],
        hasWidthClasses
    );
}

/**
 * Set progress bar values to zero.
 *
 * @returns {void}
 */
export function displayZeroLoaded(): void {
    displayProgress('0');
}

/**
 * Set progress bar values to 100%.
 *
 * @returns {void}
 */
export function displayAllLoaded(): void {
    displayProgress('100');
}
