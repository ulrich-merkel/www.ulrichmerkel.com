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
import { AVAILABLE_COLOR_SCHEMES } from '../../common/state/color-scheme/duck';
import { isBrowser } from '../../common/utils/environment';
import { setDomNodeClassName } from '../utils/dom';

const availableColorSchemes = Object.values(AVAILABLE_COLOR_SCHEMES);

/**
 * Load new theme if necessary and remove old ones.
 *
 * @param {string} colorSchemeSelected - The theme to be applied
 * @returns {void}
 */
export function applyColorScheme(colorSchemeSelected: string): void {
    if (!isBrowser() || !availableColorSchemes.includes(colorSchemeSelected)) {
        return;
    }

    // Check if we should load a new theming css file
    const add = [`color-scheme-${colorSchemeSelected}`];

    // Remove other theming css files
    const remove = availableColorSchemes
        .filter(function filterAvailableThemes(theme) {
            return theme !== colorSchemeSelected;
        })
        .map(function mapAvailableThemes(theme) {
            return `color-scheme-${theme}`;
        });

    setDomNodeClassName('doc-root', add, remove);
}
