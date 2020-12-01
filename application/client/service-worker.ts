/* eslint-disable no-restricted-globals, promise/avoid-new, lodash/prefer-startswith, lodash/prefer-includes, func-names */
/**
 * Handle service worker proxy for caching assets.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
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
 */
import { configApplication } from '../common/config/application';
import { getDateNow } from '../common/utils/date';

const configApplicationCache = configApplication.serviceWorker;
const STATIC_FILES = ['./css/app.css', './js/client.bundle.js'];
const BLACKLIST_URLS = ['/panel/'];
const PREFER_FETCH = ['text/html'];

let CACHE_KEY = `CACHE_KEY-${getTimeStamp()}`;

/**
 * Get cache timestamp to ease updates.
 *
 * @private
 * @returns {number} The timestamp to be used
 */
function getTimeStamp(): number {
    if (configApplicationCache.timeStamp) {
        return new Date(configApplicationCache.timeStamp).getTime();
    }
    return getDateNow();
}

/**
 * Handle promise errors and simply log the reason.
 *
 * @private
 * @param {string} reason - The error reason to log
 * @returns {void}
 */
function handleError(reason: string): void {
    // eslint-disable-next-line no-console
    console.warn(reason);
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
    return caches
        .open(CACHE_KEY)
        .then(function handleOpen(cache) {
            if (!cache.addAll) {
                return true;
            }
            return cache.addAll(STATIC_FILES);
        })
        .catch(handleError);
}

/**
 * Open the cache where the assets were stored and search for the requested
 * resource. Notice that in case of no matching, the promise still resolves
 * but it does with undefined as value.
 *
 * @private
 * @param {object} request - The event's request
 * @returns {Promise}
 */
function fromCache(request: Request) {
    return new Promise(function (resolve, reject) {
        if (!request) {
            return reject();
        }
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        return caches.open(CACHE_KEY).then(function handleOpen() {
            // eslint-disable-next-line promise/no-nesting
            return caches.match(request).then(function (response: Response) {
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
 * @param {object} request - The event's request
 * @param {number} [timeout=1000] - Maximum time after the fetch should fail
 * @param {object} [options] - The fetch handler options
 * @returns {Promise}
 */
function fromNetwork(request: Request, timeout = 20000, options?) {
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
         * @type {object}
         */
        const requestObject = new Request(request.url, {
            method: request.method,
            headers: request.headers,
            mode: request.mode === 'navigate' ? 'no-cors' : request.mode,
            credentials: request.credentials,
            redirect: request.redirect,
            ...options
        });

        return fetch(requestObject).then(function handleFetch(
            response: Response
        ) {
            clearTimeout(timeoutId);
            return resolve(response);
        },
        reject);
    });
}

/**
 * Fetch request from network and store response in cache.
 *
 * @private
 * @param {object} request - The event's request
 * @returns {Promise}
 */
function fetchAndCache(request: Request) {
    return fromNetwork(request).then(function handleFromNetwork(
        response: Response
    ) {
        // eslint-disable-next-line security/detect-non-literal-fs-filename, promise/no-nesting
        return caches.open(CACHE_KEY).then(function handleCacheOpen(cache) {
            // Because the response is a stream and can just be consumed
            // once we need to clone it here to add it to the cache
            cache.put(request, response.clone());
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
    return caches.keys().then(function (keys) {
        return Promise.all(
            keys
                .filter(function (key) {
                    return key.indexOf(CACHE_KEY) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
        );
    });
}

/**
 * Decide if a request should be handled by service worker.
 * If result is false the request will be bypassed and not
 * handled by the cache.
 *
 * @private
 * @param {object} request - The event's request
 * @returns {boolean}
 */
function isHandledByServiceWorker(request: Request) {
    // Prevent caching for form post requests
    if (request.method === 'POST') {
        return false;
    }

    // Browser extensions could make requests which can cause the service worker to
    // break because it's no http request (like chrome-extension://xyz.)
    if (!request.url.includes('http')) {
        return false;
    }

    // Prevent caching for blacklisted urls
    const blackListLength = BLACKLIST_URLS.length;
    // eslint-disable-next-line immutable/no-let
    for (let i = 0; i < blackListLength; i = i + 1) {
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
 * @param {object} event - Service worker event
 * @returns {void}
 */
/* eslint-disable-next-line consistent-return */
function onFetch(event) {
    const { request } = event;
    const acceptHeader = request.headers.get('Accept');

    if (isHandledByServiceWorker(request)) {
        // Try to always serve html from server
        if (PREFER_FETCH.includes(acceptHeader)) {
            return event.respondWith(
                fetchAndCache(request).catch(function catchFromCache() {
                    return fromCache(request);
                })
            );
        }

        // Try to serve from cache first
        return event.respondWith(
            fromCache(request).catch(function catchFromCache() {
                return fetchAndCache(request);
            })
        );
    }
}

/**
 * Listen to install event. Store critical assets in cache.
 *
 * @param {object} event - Service worker event
 * @returns {void}
 */
function onInstall(event) {
    return event.waitUntil(
        preCache().then(function () {
            return self.skipWaiting();
        })
    );
}

/**
 * Listen to activate event. Clear old caches after activation.
 *
 * @param {object} event - Service worker event
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
 * @param {object} event - Service worker event
 * @returns {void}
 */
function onMessage(event): void {
    if (event && event.data) {
        const data = JSON.parse(event.data);
        const modified = data.modified || null;

        if (modified) {
            // eslint-disable-next-line immutable/no-mutation
            CACHE_KEY = `CACHE_KEY-${modified}`;
        }
    }
}

self.addEventListener('install', onInstall);
self.addEventListener('fetch', onFetch);
self.addEventListener('activate', onActivate);
self.addEventListener('message', onMessage);
