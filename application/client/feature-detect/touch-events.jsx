/**
 * Test client for touch capabilities.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */

/**
 * Test if browser is touch device.
 *
 * @see {@link http://flexslider.woothemes.com/}
 *
 * @returns {boolean} Whether this device has touch display or not
 */
function hasTouchEvents() {
    const touchstart = 'ontouchstart' in window;
    const touchPoints = navigator && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);

    return touchstart || touchPoints;
}

export default hasTouchEvents;
