/* eslint-disable no-underscore-dangle, no-unused-vars */
import path from 'path';

const fs = jest.genMockFromModule('fs');

/**
 * This is a custom function that our tests can use during setup to specify
 * what the files on the "mock" filesystem should look like when any of the
 * `fs` APIs are used.
 *
 * @example
 * fs.__setMockFiles({
 *   '/path/to/file1.js': 'console.log("file1 contents");',
 *   '/path/to/file2.txt': 'file2 contents',
 * });
 * fs.__getMockFiles === { '/path/to': {
 *   'file1.js': 'console.log("file1 contents");',
 *   'file2.txt': 'file2 contents'
 * }};
 *
 * @see {@link https://facebook.github.io/jest/docs/manual-mocks.html}
 *
 * @function
 * @param {object} newMockFiles - The file config
 * @returns {void}
 */
let mockFiles = Object.create(null); // eslint-disable-line immutable/no-let
function __setMockFiles(newMockFiles) {
    mockFiles = Object.keys(newMockFiles).reduce(function reduceFile(
        target,
        file
    ) {
        const dirname = path.dirname(file);
        const basename = path.basename(file);

        // Create nested target object dir if not already done
        const reducedResult = {
            ...target,
            [dirname]: target[dirname] || {}
        };

        // Using the spread syntax to avoid mutation
        return {
            ...reducedResult,
            [dirname]: {
                ...reducedResult[dirname],
                [basename]: newMockFiles[file]
            }
        };
    },
    {});
}

/**
 * Read mocked files.
 *
 * @function
 * @private
 * @returns {object} The mockFiles object
 */
function __getMockFiles() {
    return mockFiles;
}

/**
 * Read single mocked file.
 *
 * @function
 * @private
 * @param {string} filePath - The current path to file
 * @returns {string}
 */
function __getMockFile(filePath) {
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath);
    const mockedFiles = __getMockFiles();

    return (
        mockedFiles && mockedFiles[dirname] && mockedFiles[dirname][basename]
    );
}

/**
 * A custom version of node's `readFile`.
 *
 * @function
 * @param {string} filePath - The current path to file
 * @param {object} [options={}] - The fs function options
 * @param {Function} callback - The ready handler
 * @returns {void}
 */
function readFile(filePath, options = {}, callback) {
    const file = __getMockFile(filePath);

    return callback(!file, file);
}

/**
 * A custom version of node's `readFileSync`.
 *
 * @function
 * @param {string} filePath - The current path to file
 * @param {object} [options={}] - The fs function options
 * @returns {string}
 */
function readFileSync(filePath, options = {}) {
    const file = __getMockFile(filePath);

    return file;
}

/**
 * A custom version of node's `existsSync`.
 *
 * @function
 * @param {string} filePath - The current path to file
 * @returns {boolean}
 */
function existsSync(filePath) {
    const file = __getMockFile(filePath);
    return !!file;
}

export default Object.assign(fs, {
    __setMockFiles,
    readFile,
    readFileSync,
    existsSync
});
