/**
 * Detect client side features and add css classes to html element.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires client/feature-detect/touch-events
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import hasTouchEvents from './touch-events';

/**
 * Initialize feature detection for browsers and add
 * css classnames to html.
 *
 * @returns {void}
 */
function featureDetect() {
    if (typeof window === 'undefined') {
        return;
    }

    const html = document.getElementsByTagName('html')[0];
    if (!html) {
        return;
    }

    html.classList.remove('no-js');
    html.classList.add('js');

    const touchEventsPrefix = hasTouchEvents() ? '' : 'no-';
    html.classList.add(`${touchEventsPrefix}touchevents`);
}

export default featureDetect;
