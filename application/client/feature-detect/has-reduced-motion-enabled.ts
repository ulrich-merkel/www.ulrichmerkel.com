import { AVAILABLE_MOTION_PREFERENCES } from '../../common/state/reduced-motion/constants';
import { AvailableReducedMotionsType } from '../../common/state/reduced-motion/types';
import { matchMedia } from '../utils/match-media';

const availableMotionPreferences = Object.values(AVAILABLE_MOTION_PREFERENCES);

/**
 * Detects user’s preferences for reduced motion using CSS3 Media Queries level 5
 * specification for `'prefers-reduce-motion'`.
 *
 * @see {@link https://github.com/magica11y/prefers-reduced-motion}
 * @see {@link https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion}
 *
 * @returns {string|null} Either 'no-preference', 'reduce' or null
 */
export function getSelectedPrefersReducedMotion(): AvailableReducedMotionsType | null {
    const matchedColorSchemes = availableMotionPreferences.find(function fnFind(
        reducedMotion
    ) {
        return matchMedia('prefers-reduced-motion', reducedMotion);
    });

    return matchedColorSchemes || null;
}

/**
 * Check if we should reduce animation timings.
 *
 * @returns {boolean} Whether motion is reduced in system settings
 */
export function hasReducedMotionEnabled(): boolean {
    const selectedPrefersReducedMotion = getSelectedPrefersReducedMotion();
    return selectedPrefersReducedMotion === AVAILABLE_MOTION_PREFERENCES.REDUCE;
}
