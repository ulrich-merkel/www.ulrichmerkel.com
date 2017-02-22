/* eslint-disable immutable/no-mutation */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link http://stackoverflow.com/questions/23097928/node-js-btoa-is-not-defined-error/23097961}
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/WindowBase64/btoa}
 *
 * @requires lodash
 * @requires buffer
 * @requires common/utils/environment
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */
import { isFunction } from 'lodash';
import { Buffer } from 'buffer';

import { isBrowser } from './environment';

const IS_BROWSER = isBrowser();

/**
 * Convert a string to the corresponding base64 string. This method uses the "A-Z",
 * "a-z", "0-9", "+", "/" and "=" characters to encode the string.
 *
 * @function
 * @private
 * @param {string} data - The string to be encoded
 * @returns {string} A String, representing the base-64 encoded string
 */
function utf8ToBase64(data) {

    let buffer;

    if (IS_BROWSER && isFunction(window.btoa)) {
        // preventing "Character Out Of Range" exceptions
        return window.btoa(unescape(encodeURIComponent(data)));
    }

    if (data instanceof Buffer) {
        buffer = data;
    } else {
        buffer = new Buffer(data.toString(), 'binary');
    }

    return buffer.toString('base64');

}

/**
 * Decode a string to from corresponding base64 string. This method decodes a
 * string of data which has been encoded by the btoa() method.
 *
 * @function
 * @private
 * @param {string} data - The string which has been encoded by the btoa() method
 * @returns {string} A String, representing the decoded string
 */
function base64ToUtf8(data) {

    if (IS_BROWSER && isFunction(window.atob)) {
        // preventing "Character Out Of Range" exceptions
        return decodeURIComponent(escape(window.atob(data)));
    }

    return new Buffer(data, 'base64').toString('binary');

}

/**
 * Implementation of the classic xor cipher, the script encodes/decodes
 * plain-text using a password/key
 *
 * @see {@link https://en.wikipedia.org/wiki/XOR_cipher}
 *
 * @function
 * @private
 * @param {string} data - The string to be crypted
 * @param {string} key - The password phrase used for crypt
 * @returns {string} The encrypted or decrypted string
 */
function xorEncode(data, key) {
    const xorData = String(data);
    const dataLength = xorData.length;
    const keyLength = key.length;
    let result = '';

    // encrypt data string
    for (let i = 0; i < dataLength; i = i + 1) {
        result = result + String.fromCharCode(
            xorData.charCodeAt(i) ^ key.charCodeAt(i % keyLength) // eslint-disable-line no-bitwise
        );
    }

    return result;
}

/**
 * Encrypt data string.
 *
 * @function
 * @param {string} data - The string to be encrypted
 * @param {string} key - The password phrase used for crypt
 * @returns {string}
 */
function encrypt(data, key) {
    if (!data || !key) {
        return data;
    }
    return utf8ToBase64(xorEncode(data, key));
}

/**
 * Decrypt data string.
 *
 * @function
 * @param {string} data - The string to be decrypted
 * @param {string} key - The password phrase used for crypt
 * @returns {string}
 */
function decrypt(data, key) {
    if (!data || !key) {
        return data;
    }
    return xorEncode(base64ToUtf8(data), key);
}

export default {
    encrypt,
    decrypt
};
