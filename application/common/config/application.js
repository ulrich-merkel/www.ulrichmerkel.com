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
import path from 'path';
import { toBoolean } from '../utils/parse';

const configEnvironment = {
    development: {
        isProduction: false,
        debug: toBoolean(process.env.DEBUG) || true
    },
    production: {},
    test: {
        aboveTheFold: {
            cssBase: path.join(__dirname, '../../../build/public/css/base.css'),
            scriptBootstrap: path.join(
                __dirname,
                '../../../build/public/js/bootstrap.bundle.js'
            )
        }
    }
}[process.env.NODE_ENV || 'development'];

export const configApplication = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    sessionSecret: process.env.SESSION_SECTRET || 'secret',
    debug: toBoolean(process.env.DEBUG) || false,
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
        cssBase: path.join(__dirname, '../../../public/css/base.css'),
        scriptBootstrap: path.join(
            __dirname,
            '../../../public/js/bootstrap.bundle.js'
        )
    },
    email: 'hello@ulrichmerkel.com',
    xor: {
        use: toBoolean(process.env.XOR) || true,
        key: 'd41d8cd98f00b204e9800998ecf8427e'
    },
    csp: {
        use: toBoolean(process.env.CSP) || true
    },
    serviceWorker: {
        use: toBoolean(process.env.SERVICEWORKER) || false,
        timeStamp: '2020-11-30'
    },
    applicationCache: {
        use: toBoolean(process.env.APPCACHE) || false,
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
