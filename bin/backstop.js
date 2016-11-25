#!/usr/bin/env node
/* eslint-disable no-console, import/no-unresolved */
/**
 * Copy files from source to build folder.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://github.com/garris/BackstopJS}
 *
 * @requires backstopjs
 * @requires minimist
 * @requires chalk
 * @requires fs
 * @requires build/application/server/server
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
const backstopjs = require('backstopjs');
const minimist = require('minimist');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const argv = minimist(process.argv.slice(2));
const config = argv.config || './../config/backstop/config.js';
const run = argv.run || 'test';

/**
 * Check if file exists.
 *
 * @private
 * @param {} filePath
 * @returns {}
 */
function fileExists(filePath) {
    return fs.existsSync(filePath);
}

if (!fileExists(path.resolve(process.cwd(), 'build/application/server/server.js'))) {
    console.error(chalk.red(
        'Build this project before running this script!'
    ));
    process.exit(1);
}
const server = require('./../build/application/server/server');

/**
* Helper function to read file async from disc.
*
* @function
* @param {string} fileName The file name
* @returns {Function} The promise for this request
*/
function readFile(fileName) {
    const filePath = path.resolve(process.cwd(), fileName);

    return new Promise(function handlePromise(resolve, reject) {
        if (!fileExists(filePath)) {
            return reject(Error(`No such file found ${filePath}`));
        }

        return fs.readFile(filePath, {
            encoding: 'utf-8'
        }, function handleReadFile(error, data) {
            if (error) {
                return reject(Error(error));
            }
            return resolve(data);
        });
    });
}

/**
 * Check for config file.
 *
 * @TODO: Could be removed?
 * @private
 * @param {string} filePath
 * @returns {Promise}
 */
function checkConfig(filePath) {
    return readFile(filePath)
        .then((data) => {
            return data;
        })
        .catch((reason) => {
            console.error(chalk.red(reason));
        });
}

let runningServer;

/**
 * Start server.
 *
 * @private
 * @returns {}
 */
function startServer() {
    return new Promise((resolve, reject) => {
        runningServer = server.default({}, function serverStarted(error) {
            if (error) {
                reject(error);
                return;
            }
            resolve(runningServer);
        });
    });
}

/**
 * Stop server.
 *
 * @private
 * @returns {Promise}
 */
function stopServer() {
    return new Promise((resolve) => {
        runningServer.close(resolve);
    });
}

/**
 * Start backstop.
 *
 * @private
 * @param {string} method
 * @returns {Promise}
 */
function startBackstop(method) {
    return new Promise((resolve, reject) => {
        backstopjs(method, { config })
            .then(resolve)
            .catch(reject);
    });
}

/**
 * Start routine.
 *
 * @returns {void}
 */
function bootstrap(method) {
    checkConfig(config)
        .then(startServer)
        .then(startBackstop.bind(null, method))
        .then(stopServer)
        .then(() => {
            console.log(chalk.green(
                `Backstop ${method} successful`
            ));
            process.exit(0);
        })
        .catch((reason) => {
            console.error(chalk.red(
                reason
            ));
            process.exit(1);
        });
}

// map cli options to bootstrap params
// @TODO: Improve cli option mapping, have a look at grunt-backstop?
if (run) {
    switch (run) {
    case 'test':
        bootstrap('test');
        break;
    case 'reference':
        bootstrap('reference');
        break;
    case 'open':
        bootstrap('openReport');
        break;
    default:
        break;
    }
}
