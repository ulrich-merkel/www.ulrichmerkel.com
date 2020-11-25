/**
 * Handle client side file loading and take
 * care for performance due to async loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { configApplication } from '../common/config/application';
import { loadOffline } from './loader/load-offline';
import { loadJs } from './loader/load-js';
import { loadCss } from './loader/load-css';
import { displayAllLoaded } from './loader/progress-bar';

// Init application cache if necessary.
loadOffline();

// Register the service worker if available.
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

// Load css and js assets async to improve performance.
loadCss({
    src: '/css/app.css'
});
loadJs({
    src: '/js/client.bundle.js'
});
