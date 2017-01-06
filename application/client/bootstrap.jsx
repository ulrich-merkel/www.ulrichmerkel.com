/**
 * Handle client side file loading and take
 * care for performance due to async loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires loader/offline
 * @requires loader/async
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import configApplication from './../common/config/application';
import './loader/offline';
import loaderAsync from './loader/async';
import logger from './../common/utils/logger';

loaderAsync.css('/css/app.css');
loaderAsync.js('/js/client.bundle.js');

// register the service worker if available
// if (configApplication.serviceWorker.use && navigator.serviceWorker) {
//     // checking live cycle
//     // use req.unregister() or req.update() to handle upates
//     navigator.serviceWorker.register('./service-worker.js')
//         .then(function (reg) {
//             if (reg.installing) {
//                 // req.addEventListener('updatefound') reg.installing has changed
//                 logger.log('Service worker installing');
//             } else if (reg.waiting) {
//                 logger.log('Service worker installed');
//             } else if (reg.active) {
//                 logger.log('Service worker active');
//             } else {
//                 logger.log('Successfully registered service worker', reg);
//             }
//         })
//         .catch(function (err) {
//             logger.warn('Error whilst registering service worker', err);
//         });
// }
