/* global navigator */
/**
 * Handle client side file loading and take
 * care for performance due to async loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires client/loader/offline
 * @requires client/loader/async
 * @requires common/config/application
 * @requires common/utils/logger
 *
 * @changelog
 * - 0.0.2 Added service workers
 * - 0.0.1 Basic functions and structure
 */
import configApplication from './../common/config/application';
import logger from './../common/utils/logger';
import './loader/offline';
import loaderAsync from './loader/async';

// Register the service worker if available
if (configApplication.serviceWorker.use && navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.bundle.js')
        .then(function (reg) {
            if (reg.installing) {
                return logger.log('Service worker installing');
            }
            if (reg.waiting) {
                return logger.log('Service worker installed');
            }
            if (reg.active) {
                return logger.log('Service worker active');
            }
            return logger.log('Successfully registered service worker');
        })
        .catch(function (err) {
            logger.warn('Error whilst registering service worker', err);
        });
}

// Load assets async to improve performance
loaderAsync.css('/css/app.css');
loaderAsync.js('/js/client.bundle.js');
