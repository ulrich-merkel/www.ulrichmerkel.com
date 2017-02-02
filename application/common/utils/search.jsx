import { get, isArray, isObject, isString, flattenDeep } from 'lodash';


function flattenObjectToArray(object) {
    return Object.keys(object).map(function (key) {
        const value = object[key];

        if (!isArray(value) && isObject(value)) {
            return flattenObjectToArray(value);
        }
        if (isArray(value)) {
            return flattenDeep(value)
        }
        return value
    });
}

// function getPagesByKey(configContent, key) {
//     // return Object.keys(configContent).map(function (key) {
//     //     console.log(flattenObjectToArray(configContent[key]))
//     //     return key
//     //     // reduce to simple structure
//     //     // return object with page key and
//     // // }).filter(function (key) {
//     // //     //console.log(key)
//     // //     // key === content key
//     // });
// }

function findMatches(searchTerm, locale, config = {}) {
    const escapedInput = searchTerm && searchTerm.trim().toLowerCase();
    if (!escapedInput) {
        return [];
    }

    const matchRegex = new RegExp(`\\b${escapedInput}`, 'i');

    const configContent = get(config, 'content.data');
    const configTranslation = get(config, `${locale.toLowerCase()}.data`);

    console.log(flattenObjectToArray(configContent))
    const suggestions = Object.keys(configTranslation)
        .filter(function (key) {
            return matchRegex.test(configTranslation[key]);
        })
        .sort(function (key1, key2) {
            return configTranslation[key1].indexOf(escapedInput) - configTranslation[key2].indexOf(escapedInput)
        })
        .slice(0, 10);
        // .map(getPagesByKey.bind(null, configContent))

}

export {
    findMatches
}
