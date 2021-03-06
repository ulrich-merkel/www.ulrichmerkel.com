/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { get, isArray, isObject, isString } from 'lodash';

import { AVAILABLE_LOCALES } from '../state/intl/constants';
import { Locale } from '../state/intl/types';

/**
 * Walk through array.
 *
 * @private
 * @param {Array} source - The source content
 * @param {Function} callback - The ready callback
 * @returns {Array}
 */
function traverseArray(source: [], callback: any): any {
    return source.map(function fnMap(value) {
        // eslint-disable-next-line no-use-before-define
        return traverse(value, callback);
    });
}

/**
 * Walk through object.
 *
 * @private
 * @param {object} source - The source content
 * @param {Function} callback - The ready callback
 * @returns {object}
 */
function traverseObject(
    source: Record<string, unknown>,
    callback
): Record<string, unknown> {
    const result = {};
    Object.keys(source).forEach(function fnForEach(key) {
        // eslint-disable-next-line no-use-before-define, immutable/no-mutation
        result[key] = traverse(source[key], callback);
    });
    return result;
}

/**
 * Walk through config.
 *
 * @TODO Use functional style, immutable
 *
 * @private
 * @param {object|Array|string} source - The source content
 * @param {Function} callback - The ready callback
 * @returns {*}
 */
function traverse(source: any, callback: any): any {
    if (isArray(source)) {
        return traverseArray(source, callback);
    }
    if (isObject(source)) {
        return traverseObject(source, callback);
    }
    if (isString(source)) {
        return callback.apply(this, [source]);
    }
    return source;
}

/**
 * @TODO Use functional style, immutable
 *
 * @private
 * @param {object} configContent - The complete content config
 * @param {string} configTranslation - The complete content translation
 * @returns {object}
 */
function translateContent(
    configContent: Record<string, unknown>,
    configTranslation: Record<string, unknown>
): Record<string, unknown> {
    if (!configTranslation) {
        return configContent;
    }

    return traverse(configContent, function fnTraverse(value) {
        const translatedString = configTranslation[value];
        if (translatedString) {
            return translatedString;
        }
        return value;
    });
}

/**
 * @param {object} config - The translated config
 * @returns {Function}
 */
function getContentSection(
    config: Record<string, unknown>
): (key: string) => any {
    return function getContentSectionByKey(key) {
        return get(config, key);
    };
}

/**
 * @TODO use memoize https://addyosmani.com/blog/faster-javascript-memoization/
 *
 * @param {string} [locale=defaultLocale] - The current locale
 * @param {object} config - The translation config
 * @param {string} configKey - The config key
 * @returns {object}
 */
function getTranslatedContent(
    locale: Locale = AVAILABLE_LOCALES[0],
    config: Record<string, unknown>,
    configKey: string
): Record<string, unknown> {
    const configContent = get(config, 'content.data');
    const configContentByKey = get(configContent, configKey, configContent);
    const configTranslation = get(config, `${locale.toLowerCase()}.data`);

    return translateContent(configContentByKey, configTranslation);
}

export { getContentSection, getTranslatedContent };
