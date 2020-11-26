/**
 * Es6 module for post requests server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @see {@link http://nodewebapps.com/2017/01/03/13-security-best-practices-for-your-web-application/}
 */
import nodemailer from 'nodemailer';
import assert from 'assert-plus';
import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

import { configApplication, url } from '../../common/config/application';
import { logger } from '../../common/utils/logger';
import { decrypt } from '../../common/utils/xor';
import { isValid } from '../../common/state/contact/utils';

const xorUse = configApplication.xor.use;
const xorKey = configApplication.xor.key;

/**
 * Handle success responses, check if data is provided via
 * javascript or default post.
 *
 * @private
 * @param {object} req - The current request object
 * @param {object} res - The express/http result to be send
 * @param {string} [message=''] - Additional message to be send
 * @returns {Promise}
 */
function sendSuccess(
    req: Request,
    res: Response,
    message = ''
): Promise<Response> {
    assert.object(req, 'req');
    assert.object(res, 'res');
    // assert.optionalString(message, 'message');

    if (req.xhr) {
        return res
            .status(200)
            .send({
                status: 200,
                message
            })
            .end();
    }
    return res.redirect(301, url.contactSuccess);
}

/**
 * Handle error responses, check if data is provided via
 * javascript or default post.
 *
 * @private
 * @param {object} req - The current request object
 * @param {object} res - The express/http result to be send
 * @param {string} [message=''] - Additional message to be send
 * @returns {Promise}
 */
function sendError(
    req: Request,
    res: Response,
    message = ''
): Promise<Response> {
    assert.object(req, 'req');
    assert.object(res, 'res');
    // assert.optionalString(message, 'message');

    if (req.xhr) {
        return res
            .status(400)
            .send({
                status: 400,
                message
            })
            .end();
    }
    return res.redirect(301, url.contactError);
}

/**
 * Handle contact post requests.
 *
 * @param {object} req - The current request object
 * @param {object} res - The express/http result to be send
 * @returns {Promise}
 */
export function middlewarePost(req: Request, res: Response): Promise<Response> {
    assert.object(req, 'req');
    assert.object(res, 'res');

    let postData = req.body; // eslint-disable-line immutable/no-let

    if (isEmpty(postData)) {
        return sendError(req, res, 'No data recieved');
    }
    // use req.xhr flag to determine if data is (maybe) xor encoded
    if (req.xhr && postData.data) {
        postData = JSON.parse(
            xorUse ? decrypt(postData.data, xorKey) : postData.data
        );
    }

    // @TODO Escape user data
    // @see {@link http://nodewebapps.com/2017/01/03/13-security-best-practices-for-your-web-application/}
    if (!isValid(postData)) {
        return sendError(req, res, 'Data not valid');
    }

    const transporter = nodemailer.createTransport({
        sendmail: true
    });
    return transporter.sendMail(
        {
            from: postData.email,
            to: configApplication.email,
            subject: postData.subject,
            text: `${postData.name}\n ${postData.message}`
        },
        function handleResponse(error, info) {
            transporter.close();

            if (error) {
                logger.warn(error);
                return sendError(req, res, error);
            }
            logger.info(`Message sent: ${info}`);
            return sendSuccess(req, res, info);
        }
    );
}
