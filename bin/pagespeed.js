#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console, no-void, import/no-dynamic-require, global-require */
/**
 * Run google page speed tests to improve performance and set up a performance
 * budget while development.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.4
 *
 * @see {@link https://github.com/mxstbr/react-boilerplate/}
 * @see {@link http://stackoverflow.com/questions/23569171/nodes-process-stdin-readable-stream-logs-null-when-read-inside-a-readable-event}
 *
 * @requires fs
 * @requires path
 * @requires ngrok
 * @requires psi
 * @requires minimist
 * @requires chalk
 * @requires assert-plus
 * @requires build/application/server/server
 *
 * @changelog
 * - 0.0.4 Add assert-plus as function parameter checker
 * - 0.0.3 Removed psi.output for psi due to non resolving promise
 * - 0.0.2 Improve local server handling
 * - 0.0.1 Basic functions and structure
 */
const fs = require('fs');
const path = require('path');
const ngrok = require('ngrok');
const psi = require('psi');
const minimist = require('minimist');
const chalk = require('chalk');
const assert = require('assert-plus');

const argv = minimist(process.argv.slice(2));
const argvPort = argv.port || process.env.PORT || 9000;
const argvServerPath = argv.server || '../build/application/server/server.js';
let runningServer; // eslint-disable-line immutable/no-let

// Begin reading from stdin so the process does not exit.
process.stdin.resume();
process.stdin.setEncoding('utf8');

/**
 * Helper function to check if file exists.
 *
 * @private
 * @param {string} filePath - The file name
 * @returns {boolean} Whether the file exists or not
 */
function existsSync(filePath) {
    return fs.existsSync(path.resolve(__dirname, filePath)); // eslint-disable-line security/detect-non-literal-fs-filename
}

/**
 * Get builded server entry.
 *
 * @TODO Check if file exists
 *
 * @private
 * @param {string} serverPath - The ready-to-use server file path
 * @returns {void}
 */
function getServer(serverPath) {
    assert.string(serverPath, 'serverPath');

    if (!existsSync(serverPath)) {
        return false;
    }
    return require(serverPath); // eslint-disable-line security/detect-non-literal-require
}

/**
 * Run page speed cli tool.
 *
 * @private
 * @param {string} url - The tunneled url to be tested
 * @returns {void}
 */
function runPageSpeedInsights(url) {
    assert.string(url, 'url');
    console.log(chalk.grey('Start PageSpeed Insights'));

    // @TODO Check if psi.output could be used again (removed due to non resolving promise)
    return psi(url, { nokey: 'true', strategy: 'mobile' }).then(
        function handleData(data) {
            console.log(`Speed Score: ${data.ruleGroups.SPEED.score}`);
            console.log(`Usability Score: ${data.ruleGroups.USABILITY.score}`);
            console.log('Stats: ');
            console.log(data.pageStats);
            runningServer.close();
            console.log(chalk.grey('Finished PageSpeed Insights'));
            return process.exit(0);
        }
    );
}

/**
 * Open/start tunneling because page speed refers needs a public url for
 * running their speed analytics.
 *
 * @param {string} serverPath - The file path for the ready-to-use server
 * @param {string} serverPort - The server port to be started
 * @param {Function} callback - The handler after ngrok connects
 * @returns {void}
 */
function main(serverPath, serverPort, callback) {
    assert.string(serverPath, 'serverPath');
    assert.string(serverPort, 'directory');
    assert.func(callback, 'callback');

    const server = getServer(serverPath);

    if (!server) {
        console.error(chalk.red('Please build this project first'));
        process.exit(1);
        return;
    }

    /**
     * Handle async callback when ngrok opened the server.
     *
     * @private
     * @param {object} error - Tunnel error
     * @param {string} url - The url to be opened
     * @returns {void}
     */
    function ngrokConnected(error, url) {
        if (error) {
            console.error(chalk.red(error));
            return void process.exit(1);
        }

        console.log(chalk.grey(`Serving tunnel from: ${url}`));
        return void callback(url);
    }

    console.log(chalk.grey('Starting ngrok tunnel'));
    runningServer = server.default({}, function serverStarted(serverError) {
        if (serverError) {
            console.error(chalk.red(serverError));
            process.exit(1);
            return;
        }
        ngrok.connect(argvPort, ngrokConnected);
    });
}

// Start routine
main(argvServerPath, argvPort, runPageSpeedInsights);
