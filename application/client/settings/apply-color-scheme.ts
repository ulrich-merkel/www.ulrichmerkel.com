/**
 * Es6 module for handling color schemes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { AVAILABLE_COLOR_SCHEMES } from '../../common/state/color-scheme/constants';
import { AvailableColorSchemesType } from '../../common/state/color-scheme/types';
import { isBrowser } from '../../common/utils/environment';
import { setDomNodeClassName } from '../utils/dom';
import { getClassNamesToAdd } from './get-class-names-to-add';
import { getClassNamesToRemove } from './get-class-names-to-remove';

const availableColorSchemes = Object.values(AVAILABLE_COLOR_SCHEMES);
const classNamePrefix = 'color-scheme';

/**
 * Load new color scheme if necessary and remove old ones.
 *
 * @param {string} colorSchemeSelected - The theme to be applied
 * @returns {void}
 */
export function applyColorScheme(
    colorSchemeSelected: AvailableColorSchemesType
): void {
    if (!isBrowser() || !availableColorSchemes.includes(colorSchemeSelected)) {
        return;
    }

    const add = getClassNamesToAdd([colorSchemeSelected], classNamePrefix);
    const remove = getClassNamesToRemove(
        availableColorSchemes,
        colorSchemeSelected,
        classNamePrefix
    );

    setDomNodeClassName('html', add, remove);
}
