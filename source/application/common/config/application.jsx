/**
 * Handle global application config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/config.js}
 *
 * @changelog
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
const configEnvironment = {
    development: {
        isProduction: false,
        debug: true
    },
    production: {
        isProduction: true,
        debug: false
    },
    test: {
        debug: true,
        port: 3001
    }
}[process.env.NODE_ENV || 'development'];

const configApplication = Object.assign({}, {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    sessionSecret: process.env.SESSION_SECTRET || 'secret',
    url: {
        index: '/',
        persona: '/persona',
        work: '/work',
        broadcast: '/broadcast',
        contact: '/contact',
        contactSuccess: '/contact/success',
        contactError: '/contact/error',
        imprint: '/imprint',
        disclaimer: '/disclaimer',
        privacy: '/privacy',
        api: '/api',
        apiConfig: '/config',
        apiConfigContent: '/config/content',
        apiConfigEnEn: '/config/en-en',
        apiConfigDeDe: '/config/de-de',
        cacheManifest: '/cache.manifest'
    },
    email: 'hello@ulrichmerkel.com',
    xor: {
        use: true,
        key: process.env.XOR_KEY || 'xorkey'
    },
    csp: {
        use: true
    },
    serviceWorker: {
        use: false
    },
    applicationCache: {
        use: false,
        timeStamp: '2016-10-25'
    },
    transition: {
        transitionName: 'animate',
        transitionEnterTimeout: 0,
        transitionLeaveTimeout: 0,
        transitionAppear: true,
        transitionAppearTimeout: 0,
        component: 'div',
        className: 'l-main__transition'
    }

}, configEnvironment);

export default configApplication;
export const debug = configApplication.debug;
export const url = configApplication.url;
export const host = configApplication.host;
export const port = configApplication.port;
export const csp = configApplication.csp;
export const sessionSecret = configApplication.sessionSecret;
