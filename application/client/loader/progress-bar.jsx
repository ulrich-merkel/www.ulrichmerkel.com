/**
 * Es6 module for controlling the html5 progress bar
 * and corresponding fallback.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires client/utils/dom
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { setDomNodeAttribute, setDomNodeClassName } from '../utils/dom';

/**
 * Generate an array from [0, 1, ..., 10] and add css className strings.
 *
 * @private
 * @type {Array<string>}
 */
const hasWidthClasses = Array.from(Array(11).keys()).map(function mapNumbers(number) {
    return `has-width--${number * 10}`;
});

/**
 * Set progress bar values.
 *
 * @param {number} value - The progress value to be set
 * @returns {void}
 */
function displayProgress(value) {
    setDomNodeAttribute('m-progress', 'value', value);
    setDomNodeClassName('m-progress__fallback', [`has-width--${Math.round(value / 10) * 10}`], hasWidthClasses);
}

/**
 * Set progress bar values to zero.
 *
 * @returns {void}
 */
function displayZeroLoaded() {
    displayProgress(0);
}

/**
 * Set progress bar values to 100%.
 *
 * @returns {void}
 */
function displayAllLoaded() {
    displayProgress(100);
}

export {
    displayProgress,
    displayZeroLoaded,
    displayAllLoaded
};
