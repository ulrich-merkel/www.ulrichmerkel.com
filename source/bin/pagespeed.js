#!/usr/bin/env node
/**
 * Run google page speed tests to improve performance and set up a performance
 * budget while development.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://github.com/mxstbr/react-boilerplate/}
 * @see {@link http://stackoverflow.com/questions/23569171/nodes-process-stdin-readable-stream-logs-null-when-read-inside-a-readable-event}
 *
 * @requires ngrok
 * @requires psi
 * @requires minimist
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
const ngrok = require('ngrok'); // eslint-disable-line import/no-extraneous-dependencies
const psi = require('psi'); // eslint-disable-line import/no-extraneous-dependencies
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const port = argv.port || process.env.PORT || 9000;

// Begin reading from stdin so the process does not exit.
process.stdin.resume();
process.stdin.setEncoding('utf8');

/**
 * Run page speed cli tool.
 *
 * @function
 * @private
 * @param {string} url The tunneled url to be tested
 * @returns {void}
 */
function runPageSpeedInsights(url) {
    console.log('Starting PageSpeed Insights'); // eslint-disable-line no-console
    psi.output(url).then(function handleOutput(error) {
        if (error) {
            console.error(error); // eslint-disable-line no-console
        }
        process.exit(0);
    });
}

/**
 * Open tunneling because page speed refers needs a public url for
 * running their speed analytics.
 *
 * @function
 * @private
 * @param {Function} callback success The handler after ngrok connects
 * @returns {void}
 */
function startTunnel(callback) {
    ngrok.connect(port, function handleConnect(error, url) {
        if (error) {
            console.error(error); // eslint-disable-line no-console
            return void process.exit(0);
        }

        console.log(`Serving tunnel from: ${url}`); // eslint-disable-line no-console
        return void callback(url);
    });
}

console.log('Starting ngrok tunnel'); // eslint-disable-line no-console
startTunnel(runPageSpeedInsights);
