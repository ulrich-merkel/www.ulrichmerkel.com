/**
 * Test client for touch capabilities.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isBrowser } from '../../common/utils/environment';

/**
 * Test if browser supports css custom properties.
 *
 * @see {@link https://justmarkup.com/log/2016/02/theme-switcher-using-css-custom-properties/}
 *
 * @returns {boolean} Whether this device supports custom css properties or not
 */
export function hasCssCustomProperties(): boolean {
    if (!isBrowser()) {
        return false;
    }

    return window.CSS && window.CSS.supports && window.CSS.supports('--a', 0);
}
