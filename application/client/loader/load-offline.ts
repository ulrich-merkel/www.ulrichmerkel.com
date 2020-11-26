/**
 * Es6 module for handling initial offline file loading.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://www.bennadel.com/blog/2029-using-html5-offline-application-cache-events-in-javascript.htm}
 * @see {@link http://www.html5rocks.com/de/tutorials/appcache/beginner/}
 */
import { debug } from '../../common/config/application';
import { logger } from '../../common/utils/logger';
import { isBrowser } from '../../common/utils/environment';
import {
    displayProgress,
    displayZeroLoaded,
    displayAllLoaded
} from './progress-bar';

/**
 * Get application cache api if available.
 *
 * @private
 * @returns {object|null} The api if available
 */
export function getApi(): ApplicationCache | null {
    return (isBrowser() && window.applicationCache) || null;
}

/**
 * Handle application cache progress event.
 *
 * @private
 * @param {object} [event] - The event object
 * @returns {void}
 */
export function onProgressEvent(event?: ProgressEvent): void {
    if (event && event.lengthComputable) {
        const progress = String(Math.round((100 * event.loaded) / event.total));
        displayProgress(progress);
        return;
    }

    displayProgress('0');
}

/**
 * Handle application cache update ready event. Avoid errors in browsers
 * that are not capable of swapCache.
 *
 * @private
 * @returns {void}
 */
export function onUpdateReadyEvent(): void {
    const appCache = getApi();

    try {
        appCache.swapCache();
    } catch (ignore) {
        if (debug) {
            logger.warn(ignore);
        }
    }

    window.location.reload(true);
}

/**
 * Init application cache events.
 *
 * @returns {void}
 */
export function loadOffline(): void {
    const appCache = getApi();
    if (!appCache) {
        return;
    }

    // Checking for an update. Always the first event fired in the sequence.
    appCache.addEventListener('checking', displayZeroLoaded, false);

    // Fired after the first cache of the manifest.
    appCache.addEventListener('cached', displayAllLoaded, false);

    // An update was found. The browser is fetching resources.
    appCache.addEventListener('downloading', displayZeroLoaded, false);

    // The manifest returns 404 or 410, the download failed,
    // or the manifest changed while the download was in progress.
    appCache.addEventListener('error', displayAllLoaded, false);

    // Fired after the first download of the manifest.
    appCache.addEventListener('noupdate', displayAllLoaded, false);

    // Fired if the manifest file returns a 404 or 410.
    // This results in the application cache being deleted.
    appCache.addEventListener('obsolete', displayAllLoaded, false);

    // Fired for each resource listed in the manifest as it is being fetched.
    appCache.addEventListener('progress', onProgressEvent, false);

    // Fired when the manifest resources have been newly redownloaded.
    appCache.addEventListener('updateready', onUpdateReadyEvent, false);

    /**
     * Additionally check for status constants
     *
     * Since a cache manifest file may have been updated or loaded before a script attaches event
     * listeners to test for the events, we check additionally for the current manifest status.
     */
    switch (appCache.status) {
        case appCache.UNCACHED: // UNCACHED == 0
            break;
        case appCache.IDLE: // IDLE == 1
            displayAllLoaded();
            break;
        case appCache.CHECKING: // CHECKING == 2
            break;
        case appCache.DOWNLOADING: // DOWNLOADING == 3
            displayZeroLoaded();
            break;
        case appCache.UPDATEREADY: // UPDATEREADY == 4
            onUpdateReadyEvent();
            break;
        case appCache.OBSOLETE: // OBSOLETE == 5
            displayAllLoaded();
            break;
        default:
            break;
    }
}
