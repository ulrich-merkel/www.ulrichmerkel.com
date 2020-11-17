/* eslint-disable func-names, immutable/no-mutation, immutable/no-let */
import { mockedLocalStorage } from '../../../__tests__/mocks/mocked-local-storage';
import { WebStorage } from '../web-storage';

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
        expect(webStorage.read(key)).toEqual(null);
    });
    it('should gracefully degrate', function () {
        const originalWindow = { ...global.localStorage };
        const windowSpy = jest.spyOn(global, 'localStorage', 'get');
        windowSpy.mockImplementation(() => ({
            ...originalWindow,
            getItem: jest.fn()
        }));

        webStorage = new WebStorage();

        webStorage.save(key, data);
        expect(webStorage.read(key)).toEqual(null);
        webStorage.remove(key);
        windowSpy.mockRestore();
    });
});
