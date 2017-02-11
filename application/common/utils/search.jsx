/* eslint-disable import/prefer-default-export */
import { get, isArray, isObject } from 'lodash';
import { url } from './../config/application';

const PAGES = {
    'PageIndex': url.index,
    'PageWork': url.work,
    'PageWorkOptikLudewig': `${url.work}${url.workOptikLudewig}`,
    'PageWorkSummerInspiration': `${url.work}${url.workSummerInspiration}`,
    'PageWorkMomentariness': `${url.work}${url.workMomentariness}`,
    'PageWorkLebensweltSchule': `${url.work}${url.workLebensweltSchule}`,
    'PageWorkRevolution': `${url.work}${url.workRevolution}`,
    'PageWorkVerlegeserviceBunge': `${url.work}${url.workVerlegeserviceBunge}`,
    'PageWorkGedankenKollektiv': `${url.work}${url.workGedankenKollektiv}`,
    'PagePersona': url.persona,
    'PageContact': url.contact,
    'PageDisclaimer': url.disclaimer,
    'PagePrivacy': url.privacy,
    'PageImprint': url.imprint,
    'PageBroadcast': url.broadcast
};
const CACHE = {};

/**
 * ....
 *
 * @private
 * @param {}
 * @param {}
 * @returns {}
 */
function reducer(array, val) {
    let value = val;
    if (isObject(value)) {
        // value = Object.values(value);
        return reduceObject(value, array);
    }
    if (isArray(value)) {
        return value.reduce(reducer, array);
    }
    array.push(value);
    return array;
}

/**
 * ....
 *
 * @TODO: Rename to objectReduce
 * @private
 * @param {}
 * @returns {}
 */
function reduceObject(object, initialValue = []) {
    return Object.values(object).reduce(reducer, initialValue);
}

/**
 * Create search index object.
 *
 * @private
 * @param {}
 * @param {}
 * @returns {}
 */
function createIndex(locale, config) {
    const configContent = get(config, 'content.data', {});
    const configTranslation = get(config, `${locale}.data`, {});

    return Object.keys(PAGES).reduce(function (result, value) {
        return Object.assign(
            result,
            {
                [value]: Object.keys(configTranslation).filter(function (key) {
                    return reduceObject(configContent[value]).includes(key);
                })
            }
        );
    }, {});
}

/**
 * Create translated search index object which is used for caching.
 *
 * @private
 * @param {}
 * @param {}
 * @param {}
 * @returns {}
 */
function translateIndex(locale, config, index) {
    const configTranslation = get(config, `${locale}.data`, {});

    return Object.keys(index).reduce(function (indexResult, indexKey) {
        return Object.assign(
            indexResult,
            {
                [indexKey]: index[indexKey].reduce(function (indexContent, configTranslationKey) {
                    if (configTranslation[configTranslationKey]) {
                        indexContent.push(configTranslation[configTranslationKey]);
                    }
                    return indexContent;
                }, [])
            }
        );
    }, {});
}

/**
 * ....
 *
 * @TODO: Rename to getCachedIndex
 * @private
 * @param {}
 * @param {}
 * @returns {}
 */
function getIndex(locale, config) {
    if (!CACHE[locale]) {
        CACHE[locale] = translateIndex(locale, config, createIndex(locale, config));
    }
    return CACHE[locale];
}

/**
 * ....
 *
 * @param {}
 * @param {}
 * @param {}
 * @returns {}
 */
function findMatches(searchTerm, locale, config = {}) {
    const escapedInput = searchTerm && searchTerm.trim().toLowerCase();
    if (!escapedInput) {
        return [];
    }

    const matchRegex = new RegExp(`\\b${escapedInput}`, 'i');
    const index = getIndex(locale.toLowerCase(), config);

    return Object.keys(index)
        .filter(function (key) {
            return matchRegex.test(index[key]);
        })
        .map(function (key) {
            return {
                url: PAGES[key],
                title: key,
                label: key
            }
        })
        .slice(0, 10);
}

export {
    findMatches
};
