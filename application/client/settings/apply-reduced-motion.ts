/**
 * Es6 module for handling theming as component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 */
import { MOTION_PREFERENCES } from '../../common/state/reduced-motion/duck';
import { isBrowser } from '../../common/utils/environment';
import { setDomNodeClassName } from '../utils/dom';

/**
 * Load new theme if necessary and remove old ones.
 *
 * @param {string} reducedMotionSelected - The theme to be applied
 * @returns {void}
 */
export function applyReducedMotion(reducedMotionSelected: string): void {
    if (!isBrowser() || !MOTION_PREFERENCES.includes(reducedMotionSelected)) {
        return;
    }

    // Check if we should load a new theming css file
    const add = [`reduced-motion-${reducedMotionSelected}`];

    // Remove other theming css files
    const remove = MOTION_PREFERENCES
        .filter(function filterAvailableThemes(reducedMotion) {
            return reducedMotion !== reducedMotionSelected;
        })
        .map(function mapAvailableThemes(reducedMotion) {
            return `reduced-motion-${reducedMotion}`
        });

    setDomNodeClassName(
        'doc-root',
        add,
        remove
    );
}
