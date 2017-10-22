/* global self */
/**
 * Handle service worker proxy for caching assets.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires common/utils/logger
 *
 * @see {@link https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html}
 * @see {@link https://classroom.udacity.com/courses/ud899}
 * @see {@link https://github.com/jakearchibald/wittr/}
 * @see {@link https://developer.mozilla.org/en/docs/Web/HTTP/Headers/Content-Security-Policy/child-src}
 * @see {@link https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network}
 * @see {@link https://julian.is/article/progressive-web-apps/}
 *
 * @changelog
 * - 0.0.1 Basic functions and structure
 */
import logger from '../common/utils/logger';

const STATIC_FILES = [
    './css/app.css',
    './js/client.bundle.js'
];
const CACHE = 'cache';

/**
 * Open a cache and use addAll() with an array of assets to add all of
 * them to the cache. Return a promise resolving when all the assets
 * are added.
 * 
 * @private
 * @returns {Promise}
 */
function preCache() {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return caches.open(CACHE).then(function handleOpen(cache) {
        return cache.addAll(STATIC_FILES);
    });
}

/**
 * Open the cache where the assets were stored and search for the requested
 * resource. Notice that in case of no matching, the promise still resolves
 * but it does with undefined as value.
 *
 * @private
 * @param {Object} request - The event's request
 * @returns {Promise}
 */
function fromCache(request) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return caches.open(CACHE).then(function handleOpen(cache) {
        // eslint-disable-next-line promise/no-nesting
        return cache.match(request).then(function handleMatch(matching) {
            return matching || Promise.reject('no-match');
        });
    });
}

/**
 * Time limited network request. If the network fails or the response is not
 * served before timeout, the promise is rejected.
 *
 * @private
 * @param {Object} request - The event's request
 * @param {number} [timeout=1000] - Maximum time after the fetch should fail
 * @returns {Promise}
 */
function fromNetwork(request, timeout = 1000) {
    return new Promise(function (resolve, reject) {
        const timeoutId = setTimeout(reject, timeout);

        // eslint-disable-next-line promise/always-return
        return fetch(request).then(function handleFetch(response) {
            clearTimeout(timeoutId);
            resolve(response);
        }, reject);
    });
}
/**
 * Update consists in opening the cache, performing a network request and storing
 * the new response data.
 *
 * @private
 * @param {Object} request - The event's request
 * @returns {Promise}
 */
function update(request) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    return caches.open(CACHE).then(function handleOpen(cache) {
        // eslint-disable-next-line promise/no-nesting
        return fromNetwork(request).then(function handleNetwork(response) {
            return cache.put(request, response);
        });
    });
}

/**
 * Listen to install event.
 *
 * @param {Object} event - Service worker event
 * @returns {void}
 */
function onInstall(event) {
    event.waitUntil(preCache());
}

/**
 * Listen to fetch requests.
 *
 * @param {Object} event - Service worker event
 * @returns {void}
 */
function onFetch(event) {
    event.respondWith(fromCache(event.request).catch(function catchRespondWith() {
        return update(event.request);
    }));
    event.waitUntil(update(event.request).catch(function handleFetchError(error) {
        logger.warn(error);
    }));
}

self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);
