/**
 * Es6 module for api service server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @requires express
 * @requires assert-plus
 * @requires common/config/application
 * @requires common/config/content
 * @requires common/config/intl/en-EN
 * @requires common/config/intl/de-DE
 *
 * @changelog
 * - 0.0.3 Add assert-plus as function parameter checker
 * - 0.0.2 Moved code to es6
 * - 0.0.1 Basic functions and structure
 */
import { Router } from 'express';
import assert from 'assert-plus';

import { url } from '../../common/config/application';
import configContent from '../../common/config/content';
import configIntlEnEn from '../../common/config/intl/en-EN';
import configIntlDeDe from '../../common/config/intl/de-DE';

/**
 * Routing handler to serve static files as json.
 *
 * @function
 * @private
 * @param {object} file - The file content to be served
 * @param {object} req - The express request object
 * @param {object} res - The express response object
 * @returns {void}
 */
function serveFile(file, req, res) {
    assert.object(file, 'portNumber');
    assert.object(req, 'req');
    assert.object(res, 'res');

    res.json(file);
}

const middlewareApi = Router();
middlewareApi.get(url.apiConfigContent, serveFile.bind(null, configContent));
middlewareApi.get(url.apiConfigEnEn, serveFile.bind(null, configIntlEnEn));
middlewareApi.get(url.apiConfigDeDe, serveFile.bind(null, configIntlDeDe));

export default middlewareApi;
