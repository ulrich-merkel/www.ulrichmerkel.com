/**
 * Handle react server side rendering.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes/blob/master/modules/client.js}
 * @see {@link https://github.com/reactjs/react-router/issues/3183}
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17}
 * @see {@link http://www.nearform.com/nodecrunch/self-detect-memory-leak-node/}
 * @see {@link http://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression}
 * @see {@link http://ricostacruz.com/cheatsheets/express.html}
 * @see {@link https://github.com/antoinejaussoin/retro-board/}
 * @see {@link https://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned}
 * @see {@link https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4}
 * @see {@link https://blog.christophvoigt.com/how-to-setup-ghost-on-uberspace-de/}
 * @see {@link https://github.com/pillarjs/understanding-csrf}
 * @see {@link https://www.theodo.fr/blog/2015/04/preventing-csrf-attacks-with-express-and-angularjs/}
 */
import 'babel-polyfill';

import fs from 'fs';
import { default as express, Application } from 'express';
import requestLanguage from 'express-request-language';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import ip from 'ip';
import assert from 'assert-plus';
import hostValidation from 'host-validation';

import { url, port, sessionSecret, debug } from '../common/config/application';
import { logger } from '../common/utils/logger';
import { AVAILABLE_LOCALES } from '../common/state/intl/duck';
import { middlewarePost } from './middleware/post';
import { middlewareError } from './middleware/error';
import { middlewareReact } from './middleware/react';
import { middlewareApi } from './middleware/api';
import { middlewareApplicationCache } from './middleware/application-cache';
import { callFn } from '../common/utils/function';

type Config = {
    url: string;
    port: string;
    sessionSecret: string;
    morganLogPath: string;
    staticPath: string;
};

type Callback = () => void;

/**
 * Called when express.js app starts on given port w/o errors.
 *
 * @private
 * @param {string|number} portNumber - The server listen port
 * @returns {void}
 */
function logServerStarted(portNumber: string) {
    assert.string(portNumber, 'portNumber');

    logger.log('✅  Server is running and listening');
    logger.log(`
        Localhost: http://localhost:${portNumber}
        LAN: http://${ip.address()}:${portNumber}
        Press CTRL-C to stop
    `);
}

/**
 * Start new express server.
 *
 * @private
 * @param {object} [config] - Optional server and express options
 * @param {Function} [callback] - Called when server started listening
 * @returns {object} The newly created and running server object
 */
function createServer(config?: Config, callback?: Callback): Application {
    assert.optionalObject(config, 'config');
    assert.optionalFunc(callback, 'callback');

    // Merge defaults with config
    const options = {
        url,
        port,
        sessionSecret,
        morganLogPath: '../../report/access.log',
        staticPath: '../../public',
        ...config
    };
    const serverPort = options.port;

    // Create new express service
    const app = express();

    // Declare express is sitting behind a proxy
    app.enable('trust proxy');

    // Don't expose any software information to hackers.
    app.disable('x-powered-by');

    // Log all request in the Apache combined format to STDOUT,
    // create a write stream (in append mode)
    if (debug) {
        // TODO: Check if morganLogPath file and dir exists otherwise create it
        const morganLogPath = path.resolve(__dirname, options.morganLogPath);
        app.use(
            morgan('combined', {
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                stream: fs.createWriteStream(morganLogPath, { flags: 'a' })
            })
        );
    }

    // We need this because "cookie" is true in csrfProtection
    // and session handling
    app.use(cookieParser(options.sessionSecret));

    // Get available languages by parsing Accept-Language header
    app.use(
        requestLanguage({
            languages: AVAILABLE_LOCALES
        })
    );

    // Setup json api middleware, needs to be defined BEFORE bodyParser to
    // avoid 'socket hang up' errors
    // @see {@link https://github.com/nodejitsu/node-http-proxy/issues/180#issuecomment-12244852}
    app.use(url.api, middlewareApi);

    // Parse incoming req bodies as application/x-www-form-urlencoded
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );

    // Parse incoming req bodies as application/json
    app.use(bodyParser.json());

    // Secure server by setting various HTTP headers
    app.use(helmet());

    // Prevent HTTP query parameter pollution
    app.use(hpp());

    // Prevent DNS rebinding (bypass the browser's Same-Origin Policy).
    // Allow development hosts, a domain name, and a regex for all subdomains.
    // Any requests that don't supply a whitelisted Host will be rejected
    // with a 403 HTTP status code.
    // @see {@link https://github.com/brannondorsey/host-validation}
    app.use(
        hostValidation({
            hosts: [
                `0.0.0.0:${serverPort}`,
                `127.0.0.1:${serverPort}`,
                `localhost:${serverPort}`,
                'ulrichmerkel.com',
                /.*\.ulrichmerkel\.com$/
            ]
        })
    );

    // Enable compression, using advanced response compression using a async zopfli/brotli combination
    // @see {@link https://github.com/aickin/shrink-ray}
    // @TODO app.use(shrinkRay()); can't be used until now because the target system is not supported
    app.use(compression());

    // Serve static files
    app.use(
        express.static(path.resolve(__dirname, options.staticPath), {
            index: false
        })
    );

    // Handle request for application cache config
    app.get(url.cacheManifest, middlewareApplicationCache);

    // Post routing for contact form data, has to be after cookie and session
    app.post(url.contact, middlewarePost);

    // Init react routing
    app.use(middlewareReact);

    // Handle errors if none of the above routes catched the request
    app.use(middlewareError);

    /**
     * Create an HTTP service and start listening to port.
     *
     * @function
     * @listens app~event:listen
     */
    return app.listen(serverPort, function serverStarted(error) {
        if (error) {
            logger.error(error.message);
            callFn(callback, error);
            return;
        }
        logServerStarted(serverPort);
        callFn(callback);
    });
}

/**
 * Handle express server initialisation.
 *
 * @param {object} [config] - Optional server and express options
 * @param {Function} [callback] - Called when server started listening
 * @returns {object} The newly created and running server object
 */
export function server(config?: Config, callback?: Callback): Application {
    assert.optionalObject(config, 'config');
    assert.optionalFunc(callback, 'callback');

    return createServer(config, callback);
}
