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
import { isBrowser } from  '../../common/utils/environment';

/**
 * Test if browser supports css custom properties.
 *
 * @see {@link https://justmarkup.com/log/2016/02/theme-switcher-using-css-custom-properties/}
 *
 * @returns {boolean} Whether this device supports custom css properties or not
 */
function hasCssCustomProperties() {
    if (!isBrowser()) {
        return false;
    }

    return window.CSS && window.CSS.supports && window.CSS.supports('--a', 0);
}

export default hasCssCustomProperties;
