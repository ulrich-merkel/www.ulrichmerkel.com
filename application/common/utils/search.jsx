/* eslint-disable import/prefer-default-export,  no-use-before-define */
import { get, isArray, isObject } from 'lodash';
import { url } from './../config/application';

const PAGES = {
    PageIndex: url.index,
    PageWorkOptikLudewig: `${url.work}${url.workOptikLudewig}`,
    PageWorkSummerInspiration: `${url.work}${url.workSummerInspiration}`,
    PageWorkMomentariness: `${url.work}${url.workMomentariness}`,
    PageWorkLebensweltSchule: `${url.work}${url.workLebensweltSchule}`,
    PageWorkRevolution: `${url.work}${url.workRevolution}`,
    PageWorkVerlegeserviceBunge: `${url.work}${url.workVerlegeserviceBunge}`,
    PageWorkGedankenKollektiv: `${url.work}${url.workGedankenKollektiv}`,
    PagePersona: url.persona,
    PageContact: url.contact,
    PageDisclaimer: url.disclaimer,
    PagePrivacy: url.privacy,
    PageImprint: url.imprint,
    PageBroadcast: url.broadcast
};
const CACHE = {};

/**
 * Helper function for recursiv array reduce.
 *
 * @private
 * @param {Array} array - The reducer target
 * @param {Array|Object|string|number} val - The current iteration value
 * @returns {Array} The newly filled target
 */
function reducer(array, val) {
    const value = val;

    if (isObject(value)) {
        return objectReduce(value, array);
    }
    if (isArray(value)) {
        return value.reduce(reducer, array);
    }

    array.push(value);
    return array;
}

/**
 * Helper function to get Object values and reduce them.
 *
 * @private
 * @param {Object} object - The source object
 * @param {Array} [initialValue=[]] - The reducer target
 * @returns {Array} The object reduced values
 */
function objectReduce(object, initialValue = []) {
    return Object.values(object).reduce(reducer, initialValue);
}

/**
 * Create search index object.
 *
 * @private
 * @param {string} locale - The current locale
 * @param {Object} config - The current untranslated content config
 * @returns {Array<string>} Array containing all search keys
 */
function createIndex(locale, config) {
    const configContent = get(config, 'content.data', {});
    const configTranslation = get(config, `${locale}.data`, {});

    return Object.keys(PAGES).reduce(function handleReduce(result, value) {
        return Object.assign(
            result,
            {
                [value]: Object.keys(configTranslation).filter(function handleFilter(key) {
                    return objectReduce(configContent[value]).includes(key);
                })
            }
        );
    }, {});
}

/**
 * Create translated search index object which is used for caching.
 *
 * @private
 * @param {string} locale - The current locale
 * @param {Object} config - The current untranslated content config
 * @param {Array<string>} index - The per page search intl strings
 * @returns {Array<string>} Array containing all translated search keys
 */
function translateIndex(locale, config, index) {
    const configTranslation = get(config, `${locale}.data`, {});

    return Object.keys(index).reduce(function handleReduce(indexResult, indexKey) {
        return Object.assign(
            indexResult,
            {
                [indexKey]: index[indexKey].reduce(function handleAssignReduce(indexContent, configTranslationKey) {
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
 * Get cached index or create a new one.
 *
 * @private
 * @param {string} locale - The current locale
 * @param {Object} config - The current untranslated content config
 * @returns {Array<string>} The cached (or created) index
 */
function getCachedIndex(locale, config) {
    if (!CACHE[locale]) {
        CACHE[locale] = translateIndex(locale, config, createIndex(locale, config));
    }
    return CACHE[locale];
}

/**
 * Find search matches by terms.
 *
 * @TODO: Allow multiple search terms, set url query param for sharing
 *
 * @param {string} searchTerm - The term to be searched for
 * @param {string} locale - The current locale
 * @param {Object} config - The current untranslated content config
 * @returns {Array<Object>} The search results to be displayed
 */
function findMatches(searchTerm, locale, config = {}) {
    const escapedInput = searchTerm && searchTerm.trim().toLowerCase();
    if (!escapedInput) {
        return [];
    }

    const matchRegex = new RegExp(`\\b${escapedInput}`, 'i');
    const index = getCachedIndex(locale.toLowerCase(), config);

    return Object.keys(index)
        .filter(function handleFilter(key) {
            return matchRegex && matchRegex.test(index[key]);
        })
        .map(function handleMap(key) {
            return {
                url: PAGES[key],
                title: key,
                label: key
            };
        })
        .slice(0, 10);
}

export {
    findMatches
};
