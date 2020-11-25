/**
 * Detect client side features and add css classes to html element.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isBrowser } from '../../common/utils/environment';
import { getDomNodesByTagName } from '../utils/dom';
import { hasCssCustomProperties } from './has-css-custom-properties';
import { hasTouchEvents } from './has-touch-events';
import { hasPassiveEventListeners } from './has-passive-event-listeners';
import { isFunction } from 'lodash';

const featuresToBeDetected = [
    { fn: hasCssCustomProperties, className: 'customproperties' },
    { fn: hasTouchEvents, className: 'touchevents' },
    { fn: hasPassiveEventListeners, className: 'passiveeventlisteners' }
];

/**
 * Initialize feature detection for browsers and add
 * css class names to html element.
 *
 * @returns {void}
 */
export function featureDetect(): void {
    if (!isBrowser()) {
        return;
    }

    const { classNamesToAdd, classNamesToRemove } = featuresToBeDetected.reduce(
        function (accumulator, feature) {
            const { className, fn } = feature;
            if (isFunction(fn) && fn()) {
                accumulator.classNamesToAdd.push(className);
                accumulator.classNamesToRemove.push(`no-${className}`);
            } else {
                accumulator.classNamesToAdd.push(`no-${className}`);
                accumulator.classNamesToRemove.push(className);
            }
            return accumulator;
        },
        {
            classNamesToAdd: ['js'],
            classNamesToRemove: ['no-js']
        }
    );

    const html = getDomNodesByTagName('html')[0];
    html.classList.remove(...classNamesToRemove);
    html.classList.add(...classNamesToAdd);
}
