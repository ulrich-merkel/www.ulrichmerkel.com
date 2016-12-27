// use a cacheName for cache versioning
var cacheName = 'v1:static';

var urlsToCache = [
    './',
    './css/app.css',
    './js/client.bundle.js',
    './font/icomoon/icomoon.eot',
    './font/icomoon/icomoon.svg',
    './font/icomoon/icomoon.ttf',
    './font/icomoon/icomoon.woff'
];

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});
