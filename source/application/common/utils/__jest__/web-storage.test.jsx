/* eslint-disable func-names */
import mockedLocalStorage from './../__mocks__/localStorage';
import WebStorage from './../web-storage';

global.localStorage = mockedLocalStorage;

const data = 'abcdefghijklmnopqrstuvwxyz1234567890';
const key = 'test';

describe('webStorage', function () {
    let webStorage = null;

    beforeEach(function () {
        webStorage = new WebStorage();
    });

    afterEach(function () {
        webStorage = null;
    });

    it('should save data', function () {
        expect(webStorage.save(key, data)).toBeUndefined();
    });

    it('should read data', function () {
        webStorage.save(key, data);
        expect(webStorage.read(key)).toEqual(data);
    });

    it('should delete data', function () {
        webStorage.save(key, data);
        expect(webStorage.read(key)).toEqual(data);
        webStorage.remove(key);
        expect(webStorage.read(key)).toBeUndefined();
    });
});
