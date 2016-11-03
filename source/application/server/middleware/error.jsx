/* eslint-disable no-unused-vars */
/**
 * Es6 module for server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires common/utils/logger
 *
 * @see {@link http://expressjs.com/de/guide/error-handling.html}
 *
 * @changelog
 * - 0.0.2 moved code to es6
 * - 0.0.1 basic functions and structure
 */
import logger from './../../common/utils/logger';

/**
 * Catch 404 and forward to error handler. Define custom error logic in here.
 * Middleware to catch errors always needs 4 arguments to get correctly recognized
 * as error handler by express.
 *
 * @function
 * @param {Object} err The current error object
 * @param {Object} req The current request object
 * @param {Object} res The result object
 * @param {Function} next The next iteration middleware function
 * @returns {void}
 */
function middlewareError(err, req, res, next) {

    // eslint-disable-next-line prefer-const
    let error = err;

    // handle csrf token errors thrown by csurf
    if (error.code === 'EBADCSRFTOKEN') {
        error.status = 403;
    }

    logger.error(error.stack);

    return res
        .status(error.status || 404)
        .send('Sorry - not found!')
        .end();

}

export default middlewareError;
