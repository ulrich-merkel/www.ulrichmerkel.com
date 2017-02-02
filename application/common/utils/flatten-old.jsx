// /**
//  * ....
//  *
//  * @file
//  * @module
//  * @flow weak
//  *
//  * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
//  * @version 0.0.1
//  *
//  * @requires ...
//  *
//  * @see {@link http://www.jstips.co/en/flattening-multidimensional-arrays-in-javascript/}
//  * @see {@link https://gist.github.com/penguinboy/762197}
//  * @see {@link http://stackoverflow.com/questions/19098797/fastest-way-to-flatten-un-flatten-nested-json-objects}
//  * @see {@link https://github.com/hughsk/flat}
//  * @see {@link https://github.com/hughsk/flat/blob/master/index.js}
//  *
//  * @changelog
//  * - 0.0.1 basic functions and structure
//  *
//  * @example <caption>Example usage (jsx)</caption>
//  */
//
// /**
//  *
//  *
//  * @function
//  * @param {} source
//  * @returns {}
//  */
// function flatten(source) {
//
//     var currentDepth = 1,
//         output = [],
//         outputPerPage = '';
//
//     function walkTroughPage(object) {
//
//         Object.keys(object).forEach((key) => {
//
//             let value = object[key];
//
//             const isArray = Array.isArray(value);
//             const valueType = Object.prototype.toString.call(value);
//             const isObject = (
//                 valueType === '[object Object]' ||
//                 valueType === '[object Array]'
//             );
//
//             if (!isArray && isObject && Object.keys(value).length) {
//                 currentDepth = currentDepth + 1;
//                 return walkTroughPage(value);
//             }
//
//             if (isArray) {
//                 value = value.reduce((sum, entry) => {
//                     if (typeof entry === 'string') {
//                         return sum + entry;
//                     }
//                     return walkTroughPage(entry);
//                 }, '');
//             }
//
//             outputPerPage = outputPerPage + value.toString();
//             return outputPerPage;
//
//         });
//
//         return outputPerPage;
//
//     }
//
//     Object.keys(source).forEach((key) => {
//
//         outputPerPage = '';
//
//         output.push({
//             name: key,
//             text: walkTroughPage(source[key])
//         });
//
//     });
//
//     return output;
//
// }
//
// export default flatten;
