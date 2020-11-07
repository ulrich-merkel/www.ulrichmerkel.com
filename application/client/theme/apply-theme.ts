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
import { AVAILABLE_THEMES } from '../../common/constants/theme';
import { isBrowser } from '../../common/utils/environment';
import { css } from '../loader/async';
import { deleteDomNode } from '../utils/dom';

const availableThemes = Object.values(AVAILABLE_THEMES);

/**
 * Load new theme if necessary and remove old ones.
 *
 * @param {string} themeSelected - The theme to be applied
 * @returns {void}
 */
export function applyTheme(themeSelected: string): void {
    if (!isBrowser() || !availableThemes.includes(themeSelected)) {
        return;
    }

    // Check if we should load a new theming css file
    const selector = `theme-${themeSelected}`;
    const alreadyLoaded =
        themeSelected === AVAILABLE_THEMES.DEFAULT ||
        document.getElementById(selector);
    if (!alreadyLoaded) {
        css({
            src: `/css/${selector}.css`,
            id: selector,
            className: selector
        });
    }

    // Remove other theming css files
    availableThemes
        .filter(function filterAvailableThemes(theme) {
            return theme !== themeSelected;
        })
        .forEach(function mapAvailableThemes(theme) {
            deleteDomNode(`theme-${theme}`);
        });
}
