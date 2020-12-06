/**
 * Es6 module for checking css properties via matchMedia.
 *
 * @file
 * @module
 *
 * @see {@link https://github.com/magica11y/cauldron/}
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isFunction } from 'lodash';
import { isBrowser } from '../../common/utils/environment';

/**
 * Check for native css support via match media.
 *
 * @param {string} mediaQueryKey - The media query key
 * @param {string} mediaQueryValue - The media query value
 * @returns {boolean} Whether this media queries is active/supported in the browser
 */
export function matchMedia(
    mediaQueryKey: string,
    mediaQueryValue: string
): boolean {
    if (!isBrowser() || !isFunction(window?.matchMedia)) {
        return false;
    }

    const mediaQuery = [mediaQueryKey, mediaQueryValue]
        .filter(Boolean)
        .join(': ');
    const mediaQueryString = `(${mediaQuery})`;
    const result: MediaQueryList = window.matchMedia(mediaQueryString);

    return result.media === mediaQueryString && result.matches;
}
