/**
 * Handle global application config.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/config.js}
 */
import { toBoolean } from '../utils/parse';
import { isValidString } from '../utils/string';

/**
 * Get config string entry based on process env if available.
 *
 * @private
 * @param {string} processEnv - The process.env variable to be checked
 * @param {string} fallback - The fallback value to be used
 * @returns {string} The according config entry
 */
function getConfigString(processEnv: string, fallback: string): string {
    return isValidString(process.env[processEnv]) ? process.env[processEnv] : fallback;
}

/**
 * Get config boolean entry based on process env if available.
 *
 * @private
 * @param {string} processEnv - The process.env variable to be checked
 * @param {boolean} fallback - The fallback value to be used
 * @returns {boolean} The according config entry
 */
function getConfigBoolean(processEnv: string, fallback: boolean): boolean {
    return isValidString(process.env[processEnv]) ? toBoolean(process.env[processEnv]) : fallback;
}

const configEnvironment = {
    development: {
        isProduction: false,
        debug: getConfigBoolean('DEBUG', true)
    },
    production: {},
    test: {
        aboveTheFold: {
            cssBase: '/css/base.css',
            scriptBootstrap: '/js/bootstrap.bundle.js'
        }
    }
}[process.env.NODE_ENV || 'development'];

export const configApplication = {
    host: getConfigString('HOST', 'localhost'),
    port: getConfigString('PORT', '62608'),
    sessionSecret: getConfigString('SESSION_SECTRET', 'secret'),
    debug: getConfigBoolean('DEBUG', false),
    url: {
        api: '/api',
        apiConfig: '/config',
        apiConfigContent: '/config/content',
        apiConfigDeDe: '/config/de-de',
        apiConfigEnEn: '/config/en-en',
        broadcast: '/broadcast',
        cacheManifest: '/cache.manifest',
        contact: '/contact',
        contactError: '/contact/error',
        contactSuccess: '/contact/success',
        disclaimer: '/disclaimer',
        home: '/',
        imprint: '/imprint',
        notFound: '/not-found',
        persona: '/persona',
        privacy: '/privacy',
        search: '/search',
        settings: '/settings',
        work: '/work',
        workGedankenKollektiv: '/gedanken-kollektiv',
        workLebensweltSchule: '/lebenswelt-schule',
        workMomentariness: '/momentariness',
        workOptikLudewig: '/optik-ludewig',
        workRevolution: '/revolution',
        workSummerInspiration: '/summer-inspiration',
        workVerlegeserviceBunge: '/verlegeservice-bunge'
    },
    isProduction: true,
    aboveTheFold: {
        cssBase: '../../../public/css/base.css',
        scriptBootstrap: '../../../public/js/bootstrap.bundle.js'
    },
    email: 'hello@ulrichmerkel.com',
    xor: {
        use: getConfigBoolean('XOR', true),
        key: 'd41d8cd98f00b204e9800998ecf8427e'
    },
    csp: {
        use: getConfigBoolean('CSP', true),
    },
    serviceWorker: {
        use: getConfigBoolean('SERVICEWORKER', true),
        timeStamp: '2020-11-30'
    },
    applicationCache: {
        use: getConfigBoolean('APPCACHE', false),
        timeStamp: '2020-11-30'
    },
    ...configEnvironment
};

export const { debug } = configApplication;
export const { url } = configApplication;
export const { host } = configApplication;
export const { port } = configApplication;
export const { csp } = configApplication;
export const { sessionSecret } = configApplication;
