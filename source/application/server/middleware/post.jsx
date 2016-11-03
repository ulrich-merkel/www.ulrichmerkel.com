/**
 * Es6 module for server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @requires nodemailer
 * @requires common/config/application
 * @requires common/utils/logger
 * @requires common/utils/xor
 * @requires common/state/contact/utils
 *
 * @changelog
 * - 0.0.4 added xor handling
 * - 0.0.3 adjusted routing for non-js requests
 * - 0.0.2 moved code to es6
 * - 0.0.1 basic functions and structure
 */
import nodemailer from 'nodemailer';

import configApplication, { url } from './../../common/config/application';
import logger from './../../common/utils/logger';
import xor from './../../common/utils/xor';
import { isValid } from './../../common/state/contact/utils';

const xorUse = configApplication.xor.use;
const xorKey = configApplication.xor.key;

/**
 * Handle success responses, check if data is provided via
 * javascript or default post.
 *
 * @function
 * @private
 * @param {Object} req The current request object
 * @param {Object} res The express/http result to be send
 * @param {string} [message=''] Additional message to be send
 * @returns {Function} The new routing result
 */
function sendSuccess(req, res, message = '') {
    if (req.xhr) {
        return res.status(200).send({
            status: 200,
            message: message
        }).end();
    }
    return res.redirect(301, url.contactSuccess);
}

/**
 * Handle error responses, check if data is provided via
 * javascript or default post.
 *
 * @function
 * @private
 * @param {Object} req The current request object
 * @param {Object} res The express/http result to be send
 * @param {string} [message=''] Additional message to be send
 * @returns {Function} The new routing result
 */
function sendError(req, res, message = '') {
    if (req.xhr) {
        return res.status(400).send({
            status: 400,
            message: message
        }).end();
    }
    return res.redirect(301, url.contactError);
}

/**
 * Handle contact post requests.
 *
 * @function
 * @param {Object} req The current request object
 * @param {Object} res The express/http result to be send
 * @returns {Future}
 */
function middlewarePost(req, res) {

    const transporter = nodemailer.createTransport();
    let postData = req.body;

    if (!postData) {
        return sendError(req, res, 'No data recieved');
    }

    // use req.xhr flag to determine if data is (maybe) xor encoded
    if (req.xhr && postData.data) {
        postData = JSON.parse(
            xorUse ? xor.decrypt(postData.data, xorKey) : postData.data
        );
    }

    if (!isValid(postData)) {
        return sendError(req, res, 'Data not valid');
    }

    return transporter.sendMail({
        from: postData.email,
        to: configApplication.email,
        subject: postData.subject,
        text: `${postData.name}\n ${postData.message}`
    }, function handleResponse(error, info) {
        if (error) {
            logger.warn(error);
            return sendError(req, res, error);
        }
        logger.info(`Message sent: ${info}`);
        return sendSuccess(req, res, info);
    });

}

export default middlewarePost;
