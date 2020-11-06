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
 * Test if browser "looks like" a touch device.
 *
 * @see {@link http://flexslider.woothemes.com/}
 *
 * @returns {boolean} Whether this device has touch display or not
 */
export function hasTouchEvents(): boolean {
    if (!isBrowser()) {
        return false;
    }

    const touchstart = 'ontouchstart' in window;
    const windowNavigator = window.navigator;
    const touchPoints =
        windowNavigator &&
        (windowNavigator.maxTouchPoints > 0 ||
            windowNavigator.msMaxTouchPoints > 0);

    return touchstart || touchPoints;
}
