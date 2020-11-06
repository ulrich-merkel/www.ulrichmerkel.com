/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/ulrich-merkel/client-side-cache}
 */
import { isFunction } from 'lodash';

/**
 * Handle saving of local data via web-storage api.
 *
 * @class
 */
class WebStorage {
    isSupported: boolean = false;

    /**
     * The actual class constructor.
     *
     * @constructs
     * @returns {void}
     */
    constructor() {
        // Additionally for globally checking test for getItem method
        this.isSupported =
            typeof localStorage !== 'undefined' &&
            localStorage &&
            isFunction(localStorage.getItem);

        // Try to save item, to make sure it really works,
        // could be false in private mode or while storage quota errors
        if (this.isSupported) {
            try {
                localStorage.setItem('test', 'abc');
                localStorage.removeItem('test');
            } catch (e) {
                this.isSupported = false;
            }
        }
    }

    /**
     * Get content by key from local store.
     *
     * @param {string} key - The key to look for
     * @returns {string|null} The content if found
     */
    read(key: string): string {
        if (this.isSupported) {
            return localStorage.getItem(key);
        }
        return null;
    }

    /**
     * Save content in local store.
     *
     * @param {string} key - The key to look for
     * @param {string} value - The content to be saved
     * @returns {void}
     */
    save(key: string, value: string): void {
        if (this.isSupported) {
            localStorage.setItem(key, value);
        }
    }

    /**
     * Remove content from local store.
     *
     * @param {string} key - The key to look for
     * @returns {void}
     */
    remove(key: string): void {
        if (this.isSupported) {
            localStorage.removeItem(key);
        }
    }
}

export { WebStorage };
