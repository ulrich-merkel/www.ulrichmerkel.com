/* eslint-disable immutable/no-let */
/**
 * Es6 module to handle content security policies.
 *
 * Mitigate the risk of cross-site scripting and other content-injection
 * attacks.
 *
 * This can be done by setting a `Content Security Policy` which
 * whitelists trusted sources of content for your website.
 *
 * The example header below allows ONLY scripts that are loaded from
 * the current website's origin (no inline scripts, no CDN, etc).
 * That almost certainly won't work as-is for your website!
 *
 * To make things easier, you can use an online CSP header generator
 * such as: http://cspisawesome.com/.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://content-security-policy.com/}
 * @see {@link http://www.w3.org/TR/CSP11/)}
 * @see {@link http://www.html5rocks.com/en/tutorials/security/content-security-policy/}
 * @see {@link https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/}
 * @see {@link https://blogs.dropbox.com/tech/2015/09/unsafe-inline-and-nonce-deployment/}
 * @see {@link https://report-uri.io/home/generate}
 *
 * @requires lodash
 *
 * @changelog
 * - 0.0.1 basic function and structure
 */
import { isEmpty } from 'lodash';

/**
 * Generate unique strings to be used as nonce
 * (means number only used once)
 *
 * @private
 * @param {number} length - The generated number length
 * @returns {string}
 */
function getNonce(length = 40) {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const text = [];

    for (let i = 0; i < length; i = i + 1) {
        text.push(possibleChars.charAt(Math.floor(Math.random() * possibleChars.length)));
    }

    return text.join('');
}

/**
 * Generate nonce config for inline styles
 * and scripts.
 *
 * @returns {object}
 */
function getNonceConfig() {
    return {
        style: {
            base: getNonce()
        },
        script: {
            bootstrap: getNonce(),
            config: getNonce()
        }
    };
}

/**
 * Generate CSP header to improve security, relying on nonce for dynamically
 * generated styles and scripts.
 *
 * 'unsafe-inline' is a hack for safari, which don't support nonces.
 * 'data:' is used for inline base64 placeholder images.
 *
 * @see {@link http://stackoverflow.com/questions/32788355/csp-nonce-ignored-by-safari}
 *
 * @param {object} nonceConfig - The output from a getNonceConfig call
 * @returns {string}
 */
function getCspRules(nonceConfig) {
    if (isEmpty(nonceConfig)) {
        return '';
    }

    const rules = [];
    /* eslint-disable quotes */
    rules.push(`default-src 'self' www.ulrichmerkel.com;`);
    rules.push(`script-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.script.bootstrap}' 'nonce-${nonceConfig.script.config}' 'unsafe-inline';`);
    rules.push(`style-src 'self' www.ulrichmerkel.com 'nonce-${nonceConfig.style.base}' 'unsafe-inline';`);
    rules.push(`img-src 'self' www.ulrichmerkel.com data:;`);
    rules.push(`child-src 'self';`);
    rules.push(`object-src 'none';`);
    /* eslint-enable quotes */

    return rules.join('');
}

export {
    getNonceConfig,
    getCspRules
};
