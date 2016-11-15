/* eslint-disable func-names, import/first */
jest.mock('./../../utils/web-storage', function mockFn() {
    const cache = {};
    function Cache() {}

    Cache.prototype = {
        read: (key) => {
            return cache[key];
        },
        save: (key, value) => {
            cache[key] = value;
        }
    };

    return Cache;
});

import { loadState, saveState, stateKey } from './../cache-store';
import WebStorage from './../../utils/web-storage';

const webStorage = new WebStorage();

describe.only('cacheStore', function () {
    it('should save and load a state', function () {
        const state = { foo: 'bar' };
        saveState(state);
        expect(loadState()).toEqual(state);
    });
    it('should return undefined if state is not valid', function () {
        webStorage.save(stateKey, JSON.stringify({ some: 'weirdState' }));
        expect(loadState()).toEqual(undefined);
    });
});
