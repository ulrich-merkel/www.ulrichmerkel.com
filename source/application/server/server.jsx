/**
 * Handle react server side rendering.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
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
 * @requires hpp
 * @requires helmet
 * @requires compression
 * @requires path
 * @requires body-parser
 * @requires morgan
 * @requires ip
 *
 * @requires middleware/post
 * @requires middleware/error
 * @requires middleware/react
 * @requires middleware/application-cache
 * @requires utils/logger
 * @requires config/application
 *
 * @changelog
 * - 0.0.5 refactoring, removed minimist due to dotenv
 * - 0.0.4 remove http.createServer in favour for server.listen, added logger and minimist
 * - 0.0.3 added some security aspects
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import 'babel-polyfill';

import fs from 'fs';
import express from 'express';
import session from 'express-session';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import ip from 'ip';
import requestLanguage from 'express-request-language';

import { url, port, sessionSecret } from './../common/config/application';
import logger from './../common/utils/logger';
import middlewarePost from './middleware/post';
import middlewareError from './middleware/error';
import middlewareReact from './middleware/react';
import middlewareApi from './middleware/api';
import middlewareApplicationCache from './middleware/application-cache';
import { AVAILABLE_LOCALES } from './../common/state/intl/constants';

/**
 * Called when express.js app starts on given port w/o errors
 *
 * @function
 * @private
 * @param {string|number} portNumber
 * @returns {void}
 */
function logServerStarted(portNumber) {
    // @TODO: try catch added for test failures, needs investigation (undefined logger?)
    try {
        logger.log(`✅  Server is running and listening`);
        logger.log(`
            Localhost: http://localhost:${portNumber}
            LAN: http://${ip.address()}:${portNumber}
            Press CTRL-C to stop
        `);
    } catch (ignore) {
        // eslint-disable-line no-empty
    }
}

/**
 * Start new express server
 *
 * @function
 * @private
 * @returns {Promise}
 */
function startServer() {

    // Create new express service
    const app = express();

    // Declare express is sitting behind a proxy
    app.enable('trust proxy');

    // Log all request in the Apache combined format to STDOUT,
    // create a write stream (in append mode)
    app.use(morgan('combined', {
        stream: fs.createWriteStream(
            path.join(__dirname, '../../reports/access.log'),
            { flags: 'a' }
        )
    }));

    // We need this because "cookie" is true in csrfProtection
    // and session handling
    app.use(cookieParser(sessionSecret));

    // Get available languages by parsing Accept-Language header
    app.use(requestLanguage({
        languages: AVAILABLE_LOCALES
    }));

    // Setup json api middleware, needs to be defined BEFORE bodyParser to
    // avoid 'socket hang up' errors
    // @see {@link https://github.com/nodejitsu/node-http-proxy/issues/180#issuecomment-12244852}
    app.use(url.api, middlewareApi);

    // Store session data to allow user-specific controlling
    app.use(session({
        key: 'app.session',
        secret: sessionSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000,
            httpOnly: true
        }
    }));

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

    // Enable compression
    app.use(compression());

    // Serve static files
    app.use(express.static(path.join(__dirname, '../../public'), {
        index: false
    }));

    // Post routing for contact form data, has to be after cookie and session
    app.post(url.contact, middlewarePost);

    // Handle request for application cache config
    app.get(url.cacheManifest, middlewareApplicationCache);

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
    return app.listen(port, function serverStarted(error) {
        if (error) {
            return void logger.error(error.message);
        }
        return void logServerStarted(port);
    });

}

export default startServer();
