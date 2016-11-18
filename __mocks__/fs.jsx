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
 * @param {Object} newMockFiles The file config
 * @returns {void}
 */
let mockFiles = Object.create(null);
function __setMockFiles(newMockFiles) {
    mockFiles = Object.create(null);
    Object.keys(newMockFiles).forEach(function handleValue(file) {
        const dirname = path.dirname(file);
        const basename = path.basename(file);

        if (!mockFiles[dirname]) {
            mockFiles[dirname] = {};
        }
        mockFiles[dirname][basename] = newMockFiles[file];
    });
}

/**
 * Read mocked files.
 *
 * @function
 * @returns {Object} The mockFiles object
 */
function __getMockFiles() {
    return mockFiles;
}

/**
 * A custom version of node's `readFile`.
 *
 * @function
 * @param {string} filePath
 * @param {Object} [options={}]
 * @param {Function} callback
 * @returns {void}
 */
function readFile(filePath, options = {}, callback) {
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath);
    const file = mockFiles && mockFiles[dirname] && mockFiles[dirname][basename];

    return callback(!file, file);
}

/**
 * A custom version of node's `readFileSync`.
 *
 * @function
 * @param {string} filePath
 * @param {Object} [options={}]
 * @returns {string}
 */
function readFileSync(filePath, options = {}) {
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath);
    const file = mockFiles && mockFiles[dirname] && mockFiles[dirname][basename];
    return file;
}

/**
 * A custom version of node's `existsSync`.
 *
 * @function
 * @param {string} filePath
 * @returns {boolean}
 */
function existsSync(filePath) {
    const dirname = path.dirname(filePath);
    const basename = path.basename(filePath);
    return !!(mockFiles && mockFiles[dirname] && mockFiles[dirname][basename]);
}

export default Object.assign(fs, {
    __setMockFiles,
    __getMockFiles,
    readFile,
    readFileSync,
    existsSync
});
