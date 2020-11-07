/* eslint-disable promise/avoid-new */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://davidwalsh.name/fetch}
 * @see {@link https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/}
 */
import fetch from 'isomorphic-fetch';

import { host, port } from '../config/application';
import { isNode } from './environment';

export const XHR_DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Custom response handler to check for valid http response,
 * because fetch won't reject on HTTP error status even if the
 * response is a HTTP 404 or 500.
 *
 * @see {@link https://github.com/github/fetch}
 *
 * @private
 * @param {object} response - The http request response from a network request
 * @returns {object} The response or throws an error
 */
function checkStatus(response) {
    if (response && response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response; // eslint-disable-line immutable/no-mutation
    throw error;
}

/**
 * Simple wrapper around the fetch function.
 *
 * @param {string} url - The xhr request url
 * @param {object} [options={}] - The fetch options
 * @returns {object} Promise
 */
export function xhr(url, options = {}) {
    const fetchOptions = {
        method: 'POST',
        mode: 'same-origin',
        headers: XHR_DEFAULT_HEADERS,
        ...options
    };

    /**
     * needed for node-fetch used by isomorphic-fetch because only absolute
     * urls are supported here until now...
     *
     * @see {@link https://github.com/bitinn/node-fetch/issues/43}
     */
    const absoluteUrlPrefix = isNode() ? `http://${host}:${port}` : '';

    return new Promise((resolve, reject) => {
        fetch(`${absoluteUrlPrefix}${url}`, fetchOptions)
            .then(checkStatus)
            .then(resolve)
            .catch(reject);
    });
}
