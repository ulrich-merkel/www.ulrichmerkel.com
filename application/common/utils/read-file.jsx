/* eslint-disable promise/avoid-new */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires fs
 * @requires path
 *
 * @changelog
 * - 0.0.2 added async promise version
 * - 0.0.1 basic function and structure
 */
import fs from 'fs';
import path from 'path';

const readFileOptions = {
    encoding: 'utf-8'
};

/**
 * Helper function to check if file exists.
 *
 * @private
 * @param {string} filePath - The file name
 * @returns {boolean} Whether the file exists or not
 */
function existsSync(filePath) {
    return fs.existsSync(filePath); // eslint-disable-line security/detect-non-literal-fs-filename
}

/**
 * Helper function to read file async from disc.
 *
 * @param {string} fileName - The file name
 * @returns {Function} The promise for this request
 */
function readFile(fileName) {
    const filePath = path.resolve(__dirname, fileName);

    return new Promise(function handlePromise(resolve, reject) {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        return fs.readFile(filePath, readFileOptions, function handleReadFile(
            error,
            data
        ) {
            if (error) {
                return reject(new Error(error));
            }
            return resolve(data);
        });
    });
}

/**
 * Helper function to read file sync from disc.
 *
 * @deprecated Please use the async version
 * @param {string} fileName - The file name
 * @returns {string} The utf-8 encoded file contents
 */
function readFileSync(fileName) {
    const filePath = path.resolve(__dirname, fileName);

    if (!existsSync(filePath)) {
        return '';
    }

    return fs.readFileSync(filePath, readFileOptions); // eslint-disable-line security/detect-non-literal-fs-filename
}

export { readFile, readFileSync };
