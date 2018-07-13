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
 * @requires path
 * @requires common/utils/parse
 *
 * @changelog
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import path from 'path';
import { toBoolean } from '../utils/parse';

const configEnvironment = {
    development: {
        isProduction: false,
        debug: toBoolean(process.env.DEBUG) || true
    },
    production: {
    },
    test: {
        aboveTheFold: {
            cssBase: path.join(__dirname, '../../../build/public/css/base.css'),
            scriptBootstrap: path.join(__dirname, '../../../build/public/js/bootstrap.bundle.js')
        }
    }
}[process.env.NODE_ENV || 'development'];

const configApplication = Object.assign({}, {
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
        scriptBootstrap: path.join(__dirname, '../../../public/js/bootstrap.bundle.js')
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
        use: toBoolean(process.env.SERVICEWORKER) || true,
        timeStamp: '2018-01-30'
    },
    applicationCache: {
        use: toBoolean(process.env.APPCACHE) || false,
        timeStamp: '2018-01-30'
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
