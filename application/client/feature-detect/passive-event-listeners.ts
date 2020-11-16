/**
 * Test client for 'passive' event listeners capabilities.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isBrowser } from '../../common/utils/environment';
import { logger } from '../../common/utils/logger';

/**
 * Test if browser supports 'passive' event listeners to improve scrolling.
 * Test via a getter in the options object to see if the passive property is accessed.
 *
 * @see {@link https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection}
 *
 * @returns {boolean} Whether this device has passive event listeners or not
 */
export function hasPassiveEventListeners(): boolean {
    if (!isBrowser()) {
        return false;
    }

    let supportsPassiveEventListeners = false;

    try {
        const opts = Object.defineProperty(
            {}, 
            'passive',
            {
                get: function() {
                    supportsPassiveEventListeners = true;
                }
            }
        );
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
    } catch (error) {
        logger.log(error);
    }

    return supportsPassiveEventListeners;
}
