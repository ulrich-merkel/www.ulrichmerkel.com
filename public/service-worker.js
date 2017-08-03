/* eslint-disable func-names, no-var */
// use a cacheName for cache versioning
// https://classroom.udacity.com/courses/ud899
// https://github.com/jakearchibald/wittr/
// https://developer.mozilla.org/en/docs/Web/HTTP/Headers/Content-Security-Policy/child-src

// https://julian.is/article/progressive-web-apps/
var staticCacheName = 'ulrichmerkel-v1',
    urlsToCache = [
        './css/app.css',
        './js/client.bundle.js'
    ];

function fetchAndAddToCache(event) {
     return fetch(event.request).then(function (response) {
         return response;
     });
}

function install(event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
}

function fetch(event) {
    event.respondWith(
        // caches.match(event.request).catch(function (reason) {
        //     console.warn(reason)
        //     return fetch(event.request);
        // }).then(function (response) {
        //     console.log("then baby")
        //     var r = response;
        //     caches.open('v1').then(function (cache) {
        //         console.log("then baby cache put")
        //         cache.put(event.request, r.clone());
        //     });
        //     return r;
        // }).catch(function (reason) {
        //     console.warn(reason);
        // })
        // caches.match(event.request).then(function (response) {
        //     return response || fetchAndAddToCache(event);
        // }).catch(function (reason) {
        //     console.log(reason);
        //     return fetchAndAddToCache(event);
        // })
        // caches.match(event.request).catch(function (error) {
        //     return fetch(event.request).then(function (response) {
        //         return response;
        //         // return caches.open('v1').then(function (cache) {
        //         //     cache.put(event.request, response.clone());
        //         //     return response;
        //         // });
        //     });
        // })
        // caches.match(event.request).then(function (response) {
        //     return response || fetch(event.request);
        // })
    );
}

this.addEventListener('install', install);
this.addEventListener('fetch', fetch);
//
// /**
//  * during the install phase you usually want to cache static assets
//  */
// self.addEventListener('install', function (event) {
//     // once the SW is installed, go ahead and fetch the resources to make this work offline
//     event.waitUntil(
//         // Update cacheName for new version, triggering updates
//         caches.open(staticCacheName).then(function (cache) {
//             console.log('Opened cache');
//             return cache.addAll(urlsToCache).then(function () {
//                 console.log('Add all urls to cache', urlsToCache);
//                 self.skipWaiting();
//             });
//         })
//     );
// });
//
// /**
//  *
//  */
// // self.addEventListener('message', function (event) {
// //     if (event.data.action === 'skipWaiting') {
// //         console.log('message skipWaiting');
// //         self.skipWaiting();
// //     }
// // });
//
// /**
//  *
//  */
// self.addEventListener('activate', function (event) {
//     event.waitUntil(
//         // delete old cache
//         caches.keys().then(function (cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function (cacheName) {
//                     return cacheName.startsWith('ulrichmerkel-');
//                     // return cacheName.startsWith('ulrichmerkel-') && cacheName !== staticCacheName;
//                 }).map(function (cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         }).then(function () {
//             console.log('Old cache deleted');
//         })
//     );
// });
//
// /**
//  * when the browser fetches a url, controlling requests
//  */
// self.addEventListener('fetch', function (event) {
//     // either respond with the cached object or go ahead and fetch the actual url
//     event.respondWith(
//         caches.match(event.request).then(function (response) {
//             console.log('match', response || fetch(event.request));
//             // retrieve from cache or fetch as normal
//             return response || fetch(event.request);
//         })
//     );
// });
