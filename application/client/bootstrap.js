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
import './loader/offline';
import { css, js } from './loader/async';
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
css({
    src: '/css/app.css'
});
js({
    src: '/js/client.bundle.js'
});
