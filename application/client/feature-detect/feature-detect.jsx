/* eslint-disable immutable/no-let */
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
import { isBrowser } from '../../common/utils/environment';
import hasCssCustomProperties from './css-custom-properties';
import { hasTouchEvents } from './touch-events';

/**
 * Initialize feature detection for browsers and add
 * css classnames to html.
 *
 * @returns {void}
 */
function featureDetect() {
    if (!isBrowser()) {
        return;
    }

    const classNamesToAdd = ['js'];
    const classNamesToRemove = ['no-js'];

    if (hasCssCustomProperties()) {
        classNamesToAdd.push('customproperties');
        classNamesToRemove.push('no-customproperties');
    } else {
        classNamesToAdd.push('no-customproperties');
        classNamesToRemove.push('customproperties');
    }

    if (hasTouchEvents()) {
        classNamesToAdd.push('touchevents');
        classNamesToRemove.push('no-touchevents');
    } else {
        classNamesToAdd.push('no-touchevents');
        classNamesToRemove.push('touchevents');
    }

    const html = document.getElementsByTagName('html')[0];
    html.classList.remove(...classNamesToRemove);
    html.classList.add(...classNamesToAdd);
}

export default featureDetect;
