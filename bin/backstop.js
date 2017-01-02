#!/usr/bin/env node
/* eslint-disable no-console, import/no-unresolved, import/no-extraneous-dependencies, import/no-dynamic-require, class-methods-use-this, no-process-exit */
/**
 * Handle css regression tests via backstopJS.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://github.com/garris/BackstopJS}
 * @see {@link https://github.com/ddluc/grunt-backstop}
 *
 * @requires backstopjs
 * @requires minimist
 * @requires chalk
 * @requires path
 * @requires fs
 * @requires assert-plus
 * @requires build/application/server/server
 * @requires config/backstop/config.js
 *
 * @changelog
 * - 0.0.2 Add assert-plus as function parameter checker
 * - 0.0.1 Basic functions and structure
 */
const backstopjs = require('backstopjs');
const minimist = require('minimist');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const assert = require('assert-plus');

// Read/parse configuration files
const argv = minimist(process.argv.slice(2));
const serverFile = argv.server || '../build/application/server/server.js';
const backstopConfigFile = argv.config || './../config/backstop/config.js';
const runMethod = argv.run || 'test';

/**
 * Check if transpiled server file is avialable.
 *
 * @function
 * @private
 * @returns {Object} - The ready-to-use server
 */
function getTranspiledServer() {
    if (!fs.existsSync(path.resolve(__dirname, serverFile))) {
        console.error(chalk.red(
            'Build this project before running this script!'
        ));
        process.exit(1);
    }
    return require(serverFile).default; // eslint-disable-line global-require
}

// BackstopJS Api method mapping
const METHODS = {
    test: 'test',
    reference: 'reference',
    open: 'openReport'
};

/**
 * Handle backstop helper cli.
 *
 * @class
 */
class Backstop {

    /**
     * @constructs
     * @param {string} configFile - The backstop config json
     * @param {Object} options - The cli options
     * @param {string} method - The cli method to be called
     * @returns {void}
     */
    constructor(configFile, options, method) {
        return this.init(configFile, options, method);
    }

    /**
     * Check if server needs to be handled (started or stopped).
     *
     * @function
     * @private
     * @returns {boolean}
     */
    shouldHandleServer() {
        return this.method && (this.method === METHODS.reference || this.method === METHODS.test);
    }

    /**
     * Start express server if necessary to run application.
     *
     * @function
     * @private
     * @returns {Promise}
     */
    startServer() {
        return new Promise((resolve, reject) => {
            if (!this.shouldHandleServer()) {
                resolve();
                return;
            }
            if (this.runningServer) {
                reject('Backstop server already running!');
                return;
            }
            this.runningServer = getTranspiledServer()({}, (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }

    /**
     * Stop express server if necessary to clear all running instances.
     *
     * @function
     * @private
     * @returns {Promise}
     */
    stopServer() {
        return new Promise((resolve, reject) => {
            if (!this.shouldHandleServer()) {
                resolve();
                return;
            }
            if (!this.runningServer) {
                reject('No backstop server running');
                return;
            }
            this.runningServer.close(() => {
                console.log(chalk.green(
                    'Backstop server successful stopped'
                ));
                resolve();
                this.runningServer = null;
            });
        });
    }

    /**
     * Configure backstop helper and start server.
     *
     * @function
     * @private
     * @param {string} configFile - The backstop config json
     * @param {Object} options - The cli options
     * @param {string} method - The cli method to be called
     * @returns {Promise}
     */
    configure(configFile, options = {}, method) {
        assert.string(configFile, 'configFile');
        assert.object(options, 'options');
        assert.string(method, 'method');

        if (METHODS[method]) {
            this.method = METHODS[method];
        }
        this.options = Object.assign(
            {},
            options
        );
        this.configFile = configFile;

        return this.startServer();
    }

    /**
     * Helper function to call backstopJS cli.
     *
     * @function
     * @private
     * @param {string} method - The cli function to be called
     * @returns {Promise}
     */
    backstop(method) {
        assert.string(method, 'method');

        const configFile = this.configFile;
        return new Promise((resolve, reject) => {
            backstopjs(method, { config: configFile })
                .then(resolve)
                .catch(reject);
        });
    }

    /**
     * Helper function to check for current method.
     *
     * @function
     * @private
     * @param {string} method - The cli function to be called
     * @returns {boolean}
     */
    isMethod(method) {
        assert.string(method, 'method');

        return this.method === method;
    }

    /**
     * Run backstopJS reference task.
     *
     * @function
     * @private
     * @returns {Promise|this}
     */
    reference() {
        if (this.isMethod(METHODS.reference)) {
            return this.backstop(this.method);
        }
        return this;
    }

    /**
     * Run backstopJS testing task.
     *
     * @function
     * @private
     * @returns {Promise|this}
     */
    test() {
        if (this.isMethod(METHODS.test)) {
            return this.backstop(this.method);
        }
        return this;
    }

    /**
     * Run backstopJS open task to view comparison in default browser.
     *
     * @function
     * @private
     * @returns {Promise|this}
     */
    open() {
        if (this.isMethod(METHODS.open)) {
            return this.backstop(this.method);
        }
        return this;
    }

    /**
     * Handle backstopJS success and close running server.
     *
     * @function
     * @private
     * @returns {void}
     */
    done() {
        console.log(chalk.green(
            `Backstop ${this.method} successful`
        ));
        return this.stopServer().then(() => {
            process.exit(0);
        });
    }

    /**
     * Handle backstopJS failure and close running server. Try to open
     * the current comparison in default browser.
     *
     * @function
     * @private
     * @param {Object} reason - The error message
     * @returns {void}
     */
    fail(reason) {
        assert.object(reason, 'reason');

        console.error(chalk.red(
            reason
        ));
        this.backstop(METHODS.open);
        return this.stopServer().then(() => {
            process.exit(1);
        });
    }

    /**
     * Init backstopJS service.
     *
     * @function
     * @private
     * @param {string} configFile - The backstop config json
     * @param {Object} options - The cli options
     * @param {string} method - The cli method to be called
     * @returns {void}
     */
    init(configFile, options, method) {
        return new Promise((resolve) => {
            return this.configure(configFile, options, method)
                .then(this.reference.bind(this))
                .then(this.test.bind(this))
                .then(this.open.bind(this))
                .then(this.done.bind(this))
                .catch(this.fail.bind(this))
                .finally(resolve);
        });


    }

}

// listen to cli
const backstop = new Backstop(backstopConfigFile, {}, runMethod);

module.exports = backstop;
