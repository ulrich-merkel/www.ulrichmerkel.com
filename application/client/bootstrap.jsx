/**
 * Handle client side file loading and take
 * care for performance due to async loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires client/loader/offline
 * @requires client/loader/async
 * @requires client/loader/progress-bar
 * @requires common/config/application
 *
 * @changelog
 * - 0.0.3 Improve progress-bar value setting
 * - 0.0.2 Added service workers
 * - 0.0.1 Basic functions and structure
 */
import { configApplication } from '../common/config/application';
import './loader/offline';
import loaderAsync from './loader/async';
import { displayAllLoaded } from './loader/progress-bar';

// Register the service worker if available
if (configApplication.serviceWorker.use && navigator.serviceWorker) {
    navigator.serviceWorker
        .register('/service-worker.bundle.js')
        .then(function registerServiceWorker(reg) {
            const { log } = console; // eslint-disable-line no-console
            displayAllLoaded();

            if (reg.waiting) {
                return log('Service worker installed');
            }
            if (reg.installing) {
                return log('Service worker installing');
            }
            if (reg.active) {
                return log('Service worker active');
            }
            return log('Successfully registered service worker');
        })
        .catch(function catchRegisterServiceWorker(err) {
            console.warn('Error whilst registering service worker', err); // eslint-disable-line no-console
        });
}

// Load assets async to improve performance
loaderAsync.css({
    src: '/css/app.css'
});
loaderAsync.js({
    src: '/js/client.bundle.js'
});
