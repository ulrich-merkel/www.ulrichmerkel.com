/* eslint-disable func-names, import/first, no-underscore-dangle */
jest.mock('fs');

import fs from 'fs';
import { readFile } from '../read-file';

describe('readFile', function fnDescribe() {
    const MOCK_FILE_INFO = {
        '/path/to/file1.js': 'console.log("file1 contents");',
        '/path/to/file2.txt': 'file2 contents'
    };

    beforeEach(function fnBeforeEach() {
        fs.__setMockFiles(MOCK_FILE_INFO);
    });

    it('should read a file async', function fnIt() {
        const filePath = '/path/to/file1.js';
        expect.assertions(1);
        return expect(readFile(filePath)).resolves.toBe(
            MOCK_FILE_INFO[filePath]
        );
    });
    it('should read no file async if file does not exist', function fnIt(done) {
        return readFile('/wrong/path/to/file1.js')
            .then(jest.fn())
            .catch(function (reason) {
                expect(reason).toBeDefined();
                done(); // eslint-disable-line promise/no-callback-in-promise
            });
    });
});
