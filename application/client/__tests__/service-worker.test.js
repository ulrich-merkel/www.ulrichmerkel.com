/* eslint-disable global-require, no-restricted-globals, func-names, security/detect-non-literal-require, security/detect-non-literal-fs-filename, immutable/no-mutation, import/no-dynamic-require */
/**
 * @see {@link https://github.com/pinterest/service-workers/tree/master/packages/service-worker-mock}
 * @see {@link https://hackernoon.com/service-worker-testing-made-easy-9a2d8e9aa50}
 */
const makeServiceWorkerEnv = require('service-worker-mock');

const Response = () => ({ clone: jest.fn() });
const Request = (url = '/test') => ({ url });
const SERVICE_WORKER_PATH = '../service-worker';
const SERVICE_WORKER_CACHE = 'CACHE';

global.fetch = jest.fn(() => Response({ status: 200 }));

describe('Service worker', function () {
    beforeEach(function () {
        Object.assign(global, makeServiceWorkerEnv());
        jest.resetModules();
    });
    it('should add listeners', function () {
        require(SERVICE_WORKER_PATH);
        expect(self.listeners.install).toBeDefined();
        expect(self.listeners.fetch).toBeDefined();
    });
    it('should add precached files on install', async () => {
        require(SERVICE_WORKER_PATH);

        await self.caches.open(SERVICE_WORKER_CACHE);
        expect(self.snapshot().caches.CACHE).toBeDefined();
    });
    it('should return a cached response', async () => {
        require(SERVICE_WORKER_PATH);

        // Cache a request
        const cachedResponse = Response();
        const cache = await self.caches.open(SERVICE_WORKER_CACHE);
        cache.put(Request(), cachedResponse);

        // Verify the response is the cachedResponse
        // @TODO
    });
});
