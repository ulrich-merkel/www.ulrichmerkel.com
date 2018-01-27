/* eslint-disable promise/avoid-new, lodash/prefer-startswith, lodash/prefer-includes */
/* global caches, self */
/**
 * Handle service worker proxy for caching assets.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires common/utils/logger
 *
 * @see {@link https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html}
 * @see {@link https://classroom.udacity.com/courses/ud899}
 * @see {@link https://github.com/jakearchibald/wittr/}
 * @see {@link https://developer.mozilla.org/en/docs/Web/HTTP/Headers/Content-Security-Policy/child-src}
 * @see {@link https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network}
 * @see {@link https://julian.is/article/progressive-web-apps/}
 * @see {@link https://github.com/Polymer/topeka/blob/master/sw.js}
 * @see {@link https://davidwalsh.name/service-worker-claim}
 * @see {@link https://adactio.com/journal/10204}
 * @see {@link https://stackoverflow.com/questions/46982502/cannot-construct-a-request-with-a-request-whose-mode-is-navigate-and-a-non-emp}
 * @see {@link https://afasterweb.com/2017/01/31/upgrading-your-service-worker-cache/}
 *
 * @changelog
 * - 0.0.2 Improve bypass handling
 * - 0.0.1 Basic functions and structure
 */
import logger from '../common/utils/logger';

const STATIC_FILES = [
    './css/app.css',
    './js/client.bundle.js'
];
var BLACKLIST_URLS = [
    '/panel/'
];
self.CACHE = 'CACHE'; // eslint-disable-line immutable/no-mutation

/**
 * Handle promise errors and simply log the reason.
 *
 * @private
 * @param {string} reason - The error reason to log
 * @returns {void}
 */
function handleError(reason) {
    logger.warn(reason); // eslint-disable-line no-console
}

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
    return caches.open(self.CACHE).then(function handleOpen(cache) {
        if (!cache.addAll) {
            return Promise.resolve();
        }
        return cache.addAll(STATIC_FILES);
    }).catch(handleError);
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
    return new Promise(function (resolve, reject) {
        if (!request) {
            return reject();
        }
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        return caches.open(self.CACHE).then(function handleOpen() {
            // eslint-disable-next-line promise/no-nesting
            return caches.match(request).then(function (response) {
                if (response) {
                    return resolve(response);
                }
                return reject();
            });
        });
    });
}

/**
 * Time limited network request. If the network fails or the response is not
 * served before timeout, the promise is rejected. The default timeout seems
 * to be high but kirby resizes responsive images which can take quite long
 * if they are not cached on the first time visit.
 *
 * @private
 * @param {Object} request - The event's request
 * @param {number} [timeout=1000] - Maximum time after the fetch should fail
 * @param {Object} [options] - The fetch handler options
 * @returns {Promise}
 */
function fromNetwork(request, timeout = 20000, options) {
    return new Promise(function (resolve, reject) {
        if (!request) {
            return reject();
        }
        const timeoutId = setTimeout(reject, timeout);

        /**
         * We need to create our own Request here, otherwise we will
         * have console errors for cors request and navigate events
         * (like browser reloads).
         *
         * @see {@link https://adactio.com/journal/10204}
         *
         * @private
         * @type {Object}
         */
        const requestObject = new Request(request.url, Object.assign(
            {},
            {
                method: request.method,
                headers: request.headers,
                mode: request.mode == 'navigate' ? 'no-cors' : request.mode,
                credentials: request.credentials,
                redirect: request.redirect
            },
            options
        ));

        return fetch(requestObject).then(function handleFetch(response) {
            clearTimeout(timeoutId);
            return resolve(response);
        }, reject);
    });
}

/**
 * Fetch request from network and store response in cache.
 *
 * @private
 * @param {Object} request - The event's request
 * @returns {Promise}
 */
function fetchAndCache(request) {
    return fromNetwork(request).then(function handleFromNetwork(response) {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        return caches.open(self.CACHE).then(function handleCacheOpen(cache) {
            // Because the response is a stream and can just be consumed
            // once we need to clone it here to add it to the cache
            cache.put(request, response.clone()); // eslint-disable-line promise/no-nesting
            return response;
        });
    });
}

/**
 * Remove old caches that done't match current version.
 *
 * @private
 * @returns {void}
 */
function clearCaches() { 
    return caches.keys().then(function(keys) {
        return Promise.all(keys.filter(function(key) {
            return key.indexOf(self.CACHE) !== 0;
        }).map(function(key) { 
            return caches.delete(key);
        }));
    });
}

/**
 * Decide if a request should be handled by service worker.
 * If result is false the request will be bypassed and not
 * handled by the cache.
 *
 * @private
 * @param {Object} request - The event's request
 * @returns {boolean}
 */
function isHandledByServiceWorker(request) {
    // Prevent caching for form post requests
    if (request.method === 'POST') {
        return false;
    }

    // Prevent caching for blacklisted urls
    const blackListLength = BLACKLIST_URLS.length;
    // eslint-disable-next-line immutable/no-let
    for (let i = 0; i < blackListLength; ++i) {
        // eslint-disable-next-line security/detect-non-literal-regexp
        if (new RegExp(BLACKLIST_URLS[i]).test(request.url)) {
            return false;
        }
    }

    return true;
}

/**
 * Listen to fetch requests. Try to read from cache, if this fails
 * load resource from network and store result additionaly in cache.
 *
 * @param {Object} event - Service worker event
 * @returns {void}
 */
function onFetch(event) {
    const request = event.request;
    const acceptHeader = request.headers.get('Accept');

    if (isHandledByServiceWorker(request)) {
        // Try to always serve html from server
        if (acceptHeader.indexOf('text/html') !== -1) {
            return fetchAndCache(request).catch(function catchFromCache() {
                return fromCache(request);
            });
        }

        // Try to serve from cache first
        return event.respondWith(fromCache(request).catch(function catchFromCache() {
            return fetchAndCache(request);
        }));
    }
}

/**
 * Listen to install event. Store critical assets in cache.
 *
 * @param {Object} event - Service worker event
 * @returns {void}
 */
function onInstall(event) {
    return event.waitUntil(preCache().then(function () {
        return self.skipWaiting();
    }));
}

/**
 * Listen to activate event. Clear old caches after activation.
 *
 * @param {Object} event - Service worker event
 * @returns {void}
 */
function onActivate(event) {
    return event.waitUntil(
        clearCaches().then(function () { 
            return self.clients.claim(); 
        })
    );
}

/**
 * Listen to message event. Used to pass data from client
 * to the worker environment.
 *
 * @param {Object} event - Service worker event
 * @returns {void}
 */
function onMessage(event) {
    if (event && event.data) {
        const data = JSON.parse(event.data);
        if (data.modified) {
            // eslint-disable-next-line immutable/no-mutation
            self.CACHE = `CACHE-${data.modified}`;
        }
    }
}

self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);
self.addEventListener('activate', onActivate);
self.addEventListener('message', onMessage);
