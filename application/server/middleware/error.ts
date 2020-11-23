/* eslint-disable no-unused-vars */
/**
 * Es6 module for error server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://expressjs.com/de/guide/error-handling.html}
 */
import assert from 'assert-plus';

import { logger } from '../../common/utils/logger';
import { errorCodes } from '../constants/error-codes';

/**
 * Catch 404 and forward to error handler. Define custom error logic in here.
 * Middleware to catch errors always needs 4 arguments to get correctly recognized
 * as error handler by express.
 *
 * @param {object} err - The current error object
 * @param {object} req - The current request object
 * @param {object} res - The result object
 * @param {Function} next - The next iteration middleware function
 * @returns {void}
 */
export function middlewareError(err, req, res, next) {
    assert.object(err, 'err');
    assert.object(req, 'req');
    assert.object(res, 'res');
    assert.func(next, 'next');

    // eslint-disable-next-line prefer-const, immutable/no-let
    let error = err;

    // Handle csrf token errors thrown by csurf
    if (error.code === errorCodes.EBADCSRFTOKEN) {
        error.status = 403; // eslint-disable-line immutable/no-mutation
    }

    logger.error(error.stack);

    return res.status(error.status || 404).send('Sorry - not found!');
}
