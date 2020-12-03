import { AVAILABLE_COLOR_SCHEMES } from '../../common/state/color-scheme/duck';
import { AvailableColorSchemesType } from '../../common/state/color-scheme/types';
import { matchMedia } from '../utils/match-media';

/**
 * Detects user’s color scheme preference using CSS3 Media Queries level 5
 * specification for `'prefers-color-scheme'`.
 *
 * @see {@link https://github.com/magica11y/prefers-color-scheme}
 * @see {@link https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme}
 *
 * @returns {string|null} Either 'dark', 'light' or null
 */
export function selectedPrefersColorScheme(): AvailableColorSchemesType | null {
    const matchedColorSchemes = Object.values(AVAILABLE_COLOR_SCHEMES).find(
        function fnFind(colorScheme) {
            return matchMedia('prefers-color-scheme', colorScheme);
        }
    );

    return matchedColorSchemes || null;
}

/**
 * Check if we should reduce animation timings.
 *
 * @returns {boolean} Whether motion is reduced in system settings
 */
export function hasDarkModeEnabled(): boolean {
    const colorScheme = selectedPrefersColorScheme();
    return colorScheme === AVAILABLE_COLOR_SCHEMES.DARK;
}
