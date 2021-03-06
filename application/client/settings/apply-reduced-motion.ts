/**
 * Es6 module for handling reduced motion.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { AVAILABLE_MOTION_PREFERENCES } from '../../common/state/reduced-motion/constants';
import { AvailableReducedMotionsType } from '../../common/state/reduced-motion/types';
import { isBrowser } from '../../common/utils/environment';
import { setDomNodeClassName } from '../utils/dom';
import { getClassNamesToAdd } from './get-class-names-to-add';
import { getClassNamesToRemove } from './get-class-names-to-remove';

const classNamePrefix = 'reduced-motion';
const availableMotionPreferences = Object.values(AVAILABLE_MOTION_PREFERENCES);

/**
 * Load new reduced motion setting if necessary and remove old ones.
 *
 * @param {string} reducedMotionSelected - The theme to be applied
 * @returns {void}
 */
export function applyReducedMotion(
    reducedMotionSelected: AvailableReducedMotionsType
): void {
    if (
        !isBrowser() ||
        !availableMotionPreferences.includes(reducedMotionSelected)
    ) {
        return;
    }

    const add = getClassNamesToAdd([reducedMotionSelected], classNamePrefix);
    const remove = getClassNamesToRemove(
        availableMotionPreferences,
        reducedMotionSelected,
        classNamePrefix
    );

    setDomNodeClassName('html', add, remove);
}
