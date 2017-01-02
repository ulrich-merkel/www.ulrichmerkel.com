/* eslint-disable func-names, import/first, no-underscore-dangle */
jest.mock('fs');

import fs from 'fs';
import { readFile, readFileSync } from './../read-file';

describe('common/utils/read-file', function () {
    const MOCK_FILE_INFO = {
        '/path/to/file1.js': 'console.log("file1 contents");',
        '/path/to/file2.txt': 'file2 contents'
    };

    beforeEach(function () {
        fs.__setMockFiles(MOCK_FILE_INFO);
    });

    it('should read a file async', function () {
        return readFile('/path/to/file1.js').then(function (result) {
            expect(result).toEqual(MOCK_FILE_INFO['/path/to/file1.js']);
        }).catch(function (reason) {
            expect(reason).not.toBeDefined();
        });
    });
    it('should read no file async if file does not exist', function () {
        return readFile('/wrong/path/to/file1.js').then(function (result) {
            expect(result).not.toBeDefined();
        }).catch(function (reason) {
            expect(reason).toBeDefined();
        });
    });
    it('should read a file sync', function () {
        const file = readFileSync('/path/to/file2.txt');
        expect(file).toEqual(MOCK_FILE_INFO['/path/to/file2.txt']);
    });
    it('should read no file sync if file does not exist', function () {
        const file = readFileSync('/wrong/path/to/file2.txt');
        expect(file).toEqual('');
    });
});
