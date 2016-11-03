/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires lodash
 * @requires config/content
 * @requires config/i18n/en-EN
 * @requires config/i18n/de-DE
 * @requires state/intl/constants

 * @changelog
 * - 0.0.1 basic function and structure
 */
import { get, isArray, isObject, isString } from 'lodash';

/**
 * Walk through array
 *
 * @function
 * @private
 * @param {Array} source
 * @param {Function} callback
 * @returns {Array}
 */
function traverseArray(source, callback) {
    return source.map((value) => {
        return traverse(value, callback); // eslint-disable-line no-use-before-define
    });
}

/**
 * Walk through object
 *
 * @function
 * @private
 * @param {Object} source
 * @param {Function} callback
 * @returns {Object}
 */
function traverseObject(source, callback) {
    const result = {};
    Object.keys(source).forEach((key) => {
        result[key] = traverse(source[key], callback); // eslint-disable-line no-use-before-define
    });
    return result;
}

/**
 * Walk through config
 *
 * @TODO use functional style, immutable
 *
 * @function
 * @private
 * @param {Object|Array|string} source
 * @param {Function} callback
 * @returns {*}
 */
function traverse(source, callback) {

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
 * @TODO use functional style, immutable
 *
 * @function
 * @private
 * @param {Object} configContent
 * @param {string} configTranslation
 * @returns {Object}
 */
function translateContent(configContent, configTranslation) {
    if (!configTranslation) {
        return configContent;
    }

    return traverse(configContent, (value) => {
        const translatedString = configTranslation[value];
        if (translatedString) {
            return translatedString;
        }
        return value;
    });
}

/**
 * @function
 * @param {Object} config
 * @returns {Function}
 */
function getContentSection(config) {
    return function getContentSectionByKey(key) {
        return get(config, key);
    };
}

/**
 * @TODO: use memoize https://addyosmani.com/blog/faster-javascript-memoization/
 *
 * @function
 * @param {string} locale
 * @param {Object} config
 * @param {string} contentKey
 * @returns {Object}
 */
function getTranslatedContent(locale, config, configKey) {
    const configContent = get(config, 'content.data');
    const configContentByKey = get(configContent, configKey, configContent);
    const configTranslation = get(config, `${locale.toLowerCase()}.data`);

    return translateContent(configContentByKey, configTranslation);
}

export {
    getContentSection,
    getTranslatedContent
};
