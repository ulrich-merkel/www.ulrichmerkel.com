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
 * Test if browser is touch device.
 *
 * @see {@link http://flexslider.woothemes.com/}
 *
 * @returns {boolean} Whether this device has touch display or not
 */
function hasTouchEvents() {
    if (!isBrowser()) {
        return false;
    }

    const touchstart = 'ontouchstart' in window;
    const windowNavigator = window.navigator;
    const touchPoints = windowNavigator && (
        windowNavigator.maxTouchPoints > 0 || windowNavigator.msMaxTouchPoints > 0
    );

    return touchstart || touchPoints;
}

export default hasTouchEvents;
