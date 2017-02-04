/* eslint-disable import/prefer-default-export */
import { get, isArray, isObject } from 'lodash';

const PAGES = [
    'PageIndex',
    'PageWork',
    'PageWorkOptikLudewig',
    'PageWorkSummerInspiration',
    'PageWorkMomentariness',
    'PageWorkLebensweltSchule',
    'PageWorkRevolution',
    'PageWorkVerlegeserviceBunge',
    'PageWorkGedankenKollektiv',
    'PagePersona',
    'PageContact',
    'PageDisclaimer',
    'PagePrivacy',
    'PageImprint',
    'PageBroadcast'
];
const CACHE = {};

function reducer(array, val) {
    let value = val;
    if (isObject(value)) {
        value = Object.values(value);
    }
    if (isArray(value)) {
        return value.reduce(reducer, array);
    }
    array.push(value);
    return array;
}

function reduce(object) {
    return Object.values(object).reduce(reducer, []);
}

function createIndex(locale, config) {
    const configContent = get(config, 'content.data', {});
    const configTranslation = get(config, `${locale}.data`, {});

    return PAGES.reduce(function (result, value) {
        return Object.assign(
            result,
            {
                [value]: Object.keys(configTranslation).filter(function (key) {
                    return reduce(configContent[value]).includes(key);
                })
            }
        );
    }, {});
}

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

function getIndex(locale, config) {
    if (!CACHE[locale]) {
        CACHE[locale] = translateIndex(locale, config, createIndex(locale, config));
    }
    return CACHE[locale];
}

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
        .slice(0, 10);
}

export {
    findMatches
};
