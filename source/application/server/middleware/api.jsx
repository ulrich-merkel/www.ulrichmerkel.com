/**
 * Es6 module for server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires express
 * @requires lodash
 * @requires common/config/application
 * @requires common/config/content
 * @requires common/config/i18n/en-EN
 * @requires common/config/i18n/de-DE
 *
 * @changelog
 * - 0.0.2 Moved code to es6
 * - 0.0.1 Basic functions and structure
 */
import express from 'express';
import { isFunction } from 'lodash';

import { url } from './../../common/config/application';
import configContent from './../../common/config/content';
import configI18nEnEn from './../../common/config/i18n/en-EN';
import configI18nDeDe from './../../common/config/i18n/de-DE';

/**
 * Routing handler to serve static files as json.
 *
 * @function
 * @private
 * @param {Object} file
 * @param {Object} req
 * @param {Object} res
 * @returns {void}
 */
function serveFile(file, req, res) {
    res.json(isFunction(file) ? file(req) : file);
}

const middlewareApi = express.Router(); // eslint-disable-line new-cap
middlewareApi.get(url.apiConfigContent, serveFile.bind(null, configContent));
middlewareApi.get(url.apiConfigEnEn, serveFile.bind(null, configI18nEnEn));
middlewareApi.get(url.apiConfigDeDe, serveFile.bind(null, configI18nDeDe));

export default middlewareApi;
