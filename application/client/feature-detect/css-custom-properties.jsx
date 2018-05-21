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
 * Test if browser supports css custom properties.
 *
 * @see {@link https://justmarkup.com/log/2016/02/theme-switcher-using-css-custom-properties/}
 *
 * @function
 * @returns {boolean} Whether this device supports custom properties or not
 */
function hasCssCustomProperties() {
    return window.CSS && window.CSS.supports && window.CSS.supports('--a', 0)
}

export default hasCssCustomProperties;
