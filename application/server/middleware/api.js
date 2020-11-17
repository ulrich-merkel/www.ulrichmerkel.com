/**
 * Es6 module for api service server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { Router } from 'express';
import assert from 'assert-plus';

import { url } from '../../common/config/application';
import { configContent } from '../../common/config/content';
import { configIntlEnEn } from '../../common/config/intl/en-EN';
import { configIntlDeDe } from '../../common/config/intl/de-DE';

/**
 * Routing handler to serve static files as json.
 *
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

export { middlewareApi };
