/**
 * Handle react server side rendering.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.6
 *
 * @see {@link https://github.com/ryanflorence/example-react-router-server-rendering-lazy-routes/blob/master/modules/client.js}
 * @see {@link https://github.com/reactjs/react-router/issues/3183}
 * @see {@link https://github.com/voronianski/universal-react-router-flux-2016/blob/master/src/server/middleware/renderHTML.js#L17
 * @see {@link http://www.nearform.com/nodecrunch/self-detect-memory-leak-node/}
 * @see {@link http://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression}
 * @see {@link http://ricostacruz.com/cheatsheets/express.html}
 * @see {@link https://github.com/antoinejaussoin/retro-board/}
 * @see {@link https://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned}
 * @see {@link https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4}
 * @see {@link https://blog.christophvoigt.com/how-to-setup-ghost-on-uberspace-de/}
 * @see {@link https://github.com/pillarjs/understanding-csrf}
 * @see {@link https://www.theodo.fr/blog/2015/04/preventing-csrf-attacks-with-express-and-angularjs/}
 *
 * @requires babel-polyfill
 * @requires fs
 * @requires express
 * @requires express-request-language
 * @requires hpp
 * @requires helmet
 * @requires compression
 * @requires path
 * @requires body-parser
 * @requires cookie-parser
 * @requires morgan
 * @requires ip
 * @requires assert-plus
 *
 * @requires common/config/application
 * @requires common/utils/logger
 * @requires common/state/intl/constants
 * @requires server/middleware/post
 * @requires server/middleware/error
 * @requires server/middleware/react
 * @requires server/middleware/api
 * @requires server/middleware/application-cache
 *
 * @changelog
 * - 0.0.6 Add assert-plus as function parameter checker
 * - 0.0.5 Refactoring, removed minimist due to dotenv
 * - 0.0.4 Remove http.createServer in favour for server.listen, added logger and minimist
 * - 0.0.3 Added some security aspects
 * - 0.0.2 Rewritten for es2015
 * - 0.0.1 Basic functions and structure
 */
import 'babel-polyfill';

import fs from 'fs';
import express from 'express';
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

import { url, port, sessionSecret, debug } from '../common/config/application';
import logger from '../common/utils/logger';
import { AVAILABLE_LOCALES } from '../common/state/intl/constants';
import middlewarePost from './middleware/post';
import middlewareError from './middleware/error';
import middlewareReact from './middleware/react';
import middlewareApi from './middleware/api';
import middlewareApplicationCache from './middleware/application-cache';

/**
 * Called when express.js app starts on given port w/o errors.
 *
 * @function
 * @private
 * @param {string|number} portNumber - The server listen port
 * @returns {void}
 */
function logServerStarted(portNumber) {
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
 * @function
 * @private
 * @param {Object} [config={}] - Optional server and express options
 * @param {Function} [callback=noop] - Called when server started listening
 * @returns {Object} The newly created and running server object
 */
function create(config = {}, callback = Function.prototype) {
    assert.optionalObject(config, 'config');
    assert.optionalFunc(callback, 'callback');

    // Merge defaults with config
    const options = Object.assign(
        {},
        {
            url,
            port,
            sessionSecret,
            morganLogPath: '../../report/access.log',
            staticPath: '../../public'
        },
        config
    );

    // Create new express service
    const app = express();

    // Declare express is sitting behind a proxy
    app.enable('trust proxy');

    // Don't expose any software information to hackers.
    app.disable('x-powered-by');

    // Log all request in the Apache combined format to STDOUT,
    // create a write stream (in append mode)
    if (debug) {
        app.use(morgan('combined', {
            stream: fs.createWriteStream( // eslint-disable-line security/detect-non-literal-fs-filename
                path.resolve(__dirname, options.morganLogPath), { flags: 'a' }
            ) }
        ));
    }

    // We need this because "cookie" is true in csrfProtection
    // and session handling
    app.use(cookieParser(options.sessionSecret));

    // Get available languages by parsing Accept-Language header
    app.use(requestLanguage({
        languages: AVAILABLE_LOCALES
    }));

    // Setup json api middleware, needs to be defined BEFORE bodyParser to
    // avoid 'socket hang up' errors
    // @see {@link https://github.com/nodejitsu/node-http-proxy/issues/180#issuecomment-12244852}
    app.use(url.api, middlewareApi);

    // Parse incoming req bodies as application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Parse incoming req bodies as application/json
    app.use(bodyParser.json());

    // Secure server by setting various HTTP headers
    app.use(helmet());

    // Prevent HTTP query parameter pollution
    app.use(hpp());

    // Enable compression, using advanced response compression using a async zopfli/brotli combination
    // @see {@link https://github.com/aickin/shrink-ray}
    // @TODO: app.use(shrinkRay()); can't be used until now because the target system is not supported
    app.use(compression());

    // Serve static files
    app.use(express.static(path.resolve(__dirname, options.staticPath), {
        index: false
    }));

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
    return app.listen(options.port, function serverStarted(error) {
        if (error) {
            logger.error(error.message);
            callback(error);
            return;
        }
        logServerStarted(options.port);
        callback();
    });

}

/**
 * Handle express server initialisation.
 *
 * @function
 * @param {Object} [config={}] - Optional server and express options
 * @param {Function} [callback=noop] - Called when server started listening
 * @returns {Object} The newly created and running server object
 */
function server(config, callback) {
    assert.optionalObject(config, 'config');
    assert.optionalFunc(callback, 'callback');

    return create(config, callback);
}

export default server;
