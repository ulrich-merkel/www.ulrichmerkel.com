/* eslint-disable  no-use-before-define */
import { get, isArray, isObject, isString, isEmpty } from 'lodash';
import { url } from '../config/application';
import { Locale } from '../state/intl/types';
import { logger } from './logger';

const { assign, keys, values } = Object;
const PAGES = {
    PageHome: url.home,
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

type Match = {
    url: string;
    title: string;
    label: string;
};

/**
 * Helper function for recursiv array reduce.
 *
 * @private
 * @param {Array} array - The reducer target
 * @param {Array|object|string|number} val - The current reduce iteration value
 * @returns {Array} The newly filled target
 */
function reducer(array, val) {
    const value = val;

    if (isArray(value)) {
        return value.reduce(reducer, array);
    }
    if (isObject(value)) {
        return objectReduce(value, array);
    }

    array.push(value);
    return array;
}

/**
 * Helper function to get Object values and reduce them.
 *
 * @private
 * @param {object} object - The source object
 * @param {Array} [initialValue=[]] - The reducer target
 * @returns {Array} The object reduced values
 */
function objectReduce(object = {}, initialValue = []) {
    return values(object).reduce(reducer, initialValue);
}

/**
 * Create search index object.
 *
 * @private
 * @param {string} locale - The current locale
 * @param {object} config - The current untranslated content config
 * @returns {Array<string>} Array containing all search keys
 */
function createIndex(locale, config) {
    const configContent = get(config, 'content.data', {});
    const configTranslation = get(config, `${locale}.data`, {});

    return keys(PAGES).reduce(function reducePage(result, page) {
        return assign(result, {
            [page]: keys(configTranslation).filter(function filterKey(key) {
                if (!configContent[page]) {
                    return false;
                }
                return objectReduce(configContent[page]).includes(key);
            })
        });
    }, {});
}

/**
 * Create translated search index object which is used for caching.
 *
 * @private
 * @param {string} locale - The current locale
 * @param {object} config - The current untranslated content config
 * @param {Array<string>} index - The per page search intl strings
 * @returns {Array<string>} Array containing all translated search keys
 */
function translateIndex(locale, config, index) {
    const configTranslation = get(config, `${locale}.data`, {});
    if (isEmpty(configTranslation)) {
        logger.warn(`No ${locale}.data in redux config state found`);
        return {};
    }

    return keys(index).reduce(function reduceIndexKey(result, indexKey) {
        return assign(result, {
            [indexKey]: index[indexKey].reduce(function reduceKey(
                indexContent,
                key
            ) {
                const content = configTranslation[key];
                if (content) {
                    indexContent.push(content);
                }
                return indexContent;
            },
            [])
        });
    }, {});
}

/**
 * Get cached index or create a new one.
 *
 * @private
 * @param {string} locale - The current locale
 * @param {object} config - The current untranslated content config
 * @returns {Array<string>} The cached (or created) index
 */
function getCachedIndex(locale: Locale, config) {
    if (!CACHE[locale] || isEmpty(CACHE[locale])) {
        // Just save index to cache if there are valid results returned
        const translatedIndex = translateIndex(
            locale,
            config,
            createIndex(locale, config)
        );
        if (!isEmpty(translatedIndex)) {
            CACHE[locale] = translatedIndex; // eslint-disable-line immutable/no-mutation
        }
    }
    return CACHE[locale];
}

/**
 * Find search matches by terms.
 *
 * @TODO Set url query param for sharing
 *
 * @param {string} searchTerm - The term to be searched for
 * @param {string} locale - The selected locale
 * @param {object} config - The (untranslated) redux config state
 * @returns {Array<object>} The search results to be displayed
 */
export function findMatches(
    searchTerm: string,
    locale: Locale,
    config = {}
): Match[] {
    const escapedInput =
        isString(searchTerm) && searchTerm.trim().toLowerCase();
    if (!escapedInput) {
        return [];
    }

    const index =
        isString(locale) && getCachedIndex(locale.toLowerCase(), config);
    if (!index) {
        return [];
    }

    const escapedInputs = escapedInput.split(' ');
    return keys(index)
        .filter(function filterKey(key) {
            return (
                escapedInputs.every(function someNeedle(needle) {
                    const matchRegex = new RegExp(`\\b${needle}`, 'i'); // eslint-disable-line security/detect-non-literal-regexp
                    return matchRegex && matchRegex.test(index[key]);
                }) || false
            );
        })
        .map(function mapKey(key) {
            return {
                url: PAGES[key],
                title: key,
                label: key
            };
        })
        .slice(0, 10);
}
