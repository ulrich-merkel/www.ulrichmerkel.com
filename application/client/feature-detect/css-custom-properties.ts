/**
 * Test client for touch capabilities.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { isFunction } from 'lodash';
import { isBrowser } from '../../common/utils/environment';

/**
 * Test if browser supports css custom properties. A simple "window.CSS.supports('--a', 0)"
 * check is sadly not enough due to bugs in safari here.
 *
 * @see {@link https://gist.github.com/wesbos/8b9a22adc1f60336a699}
 * @see {@link https://justmarkup.com/log/2016/02/theme-switcher-using-css-custom-properties/}
 *
 * @returns {boolean} Whether this device supports custom css properties or not
 */
export function hasCssCustomProperties(): boolean {
    if (!isBrowser()) {
        return false;
    }

    const color = 'rgb(255, 198, 0)';
    var testElement = document.createElement('span');

    testElement.style.setProperty('--color', color);
    testElement.style.setProperty('background', 'var(--color)');
    document.body.appendChild(testElement);

    const doesSupportCssCustomProperties =
        getComputedStyle(testElement).backgroundColor === color;
    document.body.removeChild(testElement);

    return doesSupportCssCustomProperties;
}
