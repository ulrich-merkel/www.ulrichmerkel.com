#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console, no-void */
/**
 * Run google page speed tests to improve performance and set up a performance
 * budget while development.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://github.com/mxstbr/react-boilerplate/}
 * @see {@link http://stackoverflow.com/questions/23569171/nodes-process-stdin-readable-stream-logs-null-when-read-inside-a-readable-event}
 *
 * @requires ngrok
 * @requires psi
 * @requires minimist
 * @requires build/application/server/server
 *
 * @changelog
 * - 0.0.2 improve local server handling
 * - 0.0.1 basic functions and structure
 */
const ngrok = require('ngrok');
const psi = require('psi');
const minimist = require('minimist');
const server = require('./../build/application/server/server');

const argv = minimist(process.argv.slice(2));
const port = argv.port || process.env.PORT || 9000;
let runningServer;

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
    console.log('Starting PageSpeed Insights');
    psi.output(url).then(function handleOutput(error) {
        if (error) {
            console.error(error);
        }
        runningServer.close();
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
    if (!server) {
        console.error('Please build this project first');
        process.exit(0);
    }
    runningServer = server.default({}, function serverStarted(serverError) {
        if (serverError) {
            console.error(serverError);
            process.exit(0);
            return;
        }
        ngrok.connect(port, function ngrokConnected(error, url) {
            if (error) {
                console.error(error);
                return void process.exit(0);
            }

            console.log(`Serving tunnel from: ${url}`);
            return void callback(url);
        });
    });

}

console.log('Starting ngrok tunnel');
startTunnel(runPageSpeedInsights);
