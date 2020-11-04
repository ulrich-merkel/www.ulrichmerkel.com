/* eslint-disable no-unused-vars */
/**
 * Es6 module for error server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires assert-plus
 * @requires common/utils/logger
 *
 * @see {@link http://expressjs.com/de/guide/error-handling.html}
 *
 * @changelog
 * - 0.0.3 Add assert-plus as function parameter checker
 * - 0.0.2 Moved code to es6
 * - 0.0.1 Basic functions and structure
 */
import assert from 'assert-plus';

import logger from '../../common/utils/logger';

/**
 * Catch 404 and forward to error handler. Define custom error logic in here.
 * Middleware to catch errors always needs 4 arguments to get correctly recognized
 * as error handler by express.
 *
 * @function
 * @param {object} err - The current error object
 * @param {object} req - The current request object
 * @param {object} res - The result object
 * @param {Function} next - The next iteration middleware function
 * @returns {void}
 */
function middlewareError(err, req, res, next) {
    assert.object(err, 'err');
    assert.object(req, 'req');
    assert.object(res, 'res');
    assert.func(next, 'next');

    // eslint-disable-next-line prefer-const, immutable/no-let
    let error = err;

    // handle csrf token errors thrown by csurf
    if (error.code === 'EBADCSRFTOKEN') {
        error.status = 403; // eslint-disable-line immutable/no-mutation
    }

    logger.error(error.stack);

    return res.status(error.status || 404).send('Sorry - not found!');
}

export default middlewareError;
