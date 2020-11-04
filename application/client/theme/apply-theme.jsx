/**
 * Es6 module for handling theming as component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2018
 * @version 0.0.1
 *
 * @see {@link https://blog.risingstack.com/react-js-best-practices-for-2016/}
 *
 * @requires common/constants/theme
 * @requires common/utils/environment
 * @requires client/loader/async
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import { AVAILABLE_THEMES } from '../../common/constants/theme';
import { isBrowser } from '../../common/utils/environment';
import loaderAsync from '../loader/async';
import { deleteDomNode } from '../utils/dom';

const availableThemes = Object.values(AVAILABLE_THEMES);

/**
 * Load new theme if necessary and remove old ones.
 *
 * @param {string} themeSelected - The theme to be applied
 * @returns {void}
 */
function applyTheme(themeSelected) {
    if (!isBrowser() || !availableThemes.includes(themeSelected)) {
        return;
    }

    // Check if we should load a new theming css file
    const selector = `theme-${themeSelected}`;
    const alreadyLoaded = themeSelected === AVAILABLE_THEMES.DEFAULT || document.getElementById(selector);
    if (!alreadyLoaded) {
        loaderAsync.css({
            src: `/css/${selector}.css`,
            id: selector,
            className: selector
        });
    }

    // Remove other theming css files
    availableThemes.filter(function filterAvailableThemes(theme) {
        return theme !== themeSelected;
    }).forEach(function mapAvailableThemes(theme) {
        deleteDomNode(`theme-${theme}`);
    });
}

export default applyTheme;
