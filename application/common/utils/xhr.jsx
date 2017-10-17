/* eslint-disable promise/avoid-new */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://davidwalsh.name/fetch}
 * @see {@link https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/}
 *
 * @requires isomorphic-fetch
 * @requires common/config/application
 * @requires common/utils/environment
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */
import fetch from 'isomorphic-fetch';

import { host, port } from '../config/application';
import { isNode } from './environment';

const XHR_DEFAULT_HEADERS = {
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
 * @param {Object} response - The http request response from a network request
 * @returns {Object} The response or throws an error
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
 * @function
 * @param {string} url - The xhr request url
 * @param {Object} [options={}] - The fetch options
 * @returns {Object} Promise
 */
function xhr(url, options = {}) {
    const fetchOptions = Object.assign({}, {
        method: 'POST',
        mode: 'same-origin',
        headers: XHR_DEFAULT_HEADERS,
        body: {}
    }, options);

    /**
     * needed for node-fetch used by isomorphic-fetch because only absolute
     * urls are supported here until now...
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

export default xhr;

export {
    XHR_DEFAULT_HEADERS
};
