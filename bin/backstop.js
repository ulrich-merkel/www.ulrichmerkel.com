#!/usr/bin/env node
/* eslint-disable no-console, import/no-unresolved, import/no-dynamic-require, class-methods-use-this */
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
 * @requires config/backstop/config.js
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

const server = argv.server || '../build/application/server/server.js';
const config = argv.config || './../config/backstop/config.js';
const run = argv.run || 'test';

if (!fs.existsSync(path.resolve(__dirname, server))) {
    console.error(chalk.red(
        'Build this project before running this script!'
    ));
    process.exit(1);
}
const serverEntry = require(server);

const methods = {
    test: 'test',
    reference: 'reference',
    open: 'openReport'
};

const defaults = {
};

class Backstop {
    constructor(options, method) {
        if (methods[method]) {
            this.method = methods[method];
        }
        this.init(options);
    }

    startServer() {
        // @TODO: just start when needed (ref, test)
        return new Promise((resolve, reject) => {
            if (this.runningServer) {
                reject('Backstop server already running!');
                return;
            }
            this.runningServer = serverEntry.default({}, (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    }

    stopServer() {
        // @TODO: just stop when needed (ref, test)
        return new Promise((resolve, reject) => {
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

    configure(options = {}) {
        this.options = Object.assign(
            {},
            defaults,
            options
        );
        return this.startServer();
    }

    backstop(method) {
        return new Promise((resolve, reject) => {
            backstopjs(method, { config })
            .then(resolve)
            .catch(reject);
        });
    }

    reference() {
        if (this.method === methods.reference) {
            return this.backstop(this.method);
        }
        return this;
    }

    test() {
        if (this.method === methods.test) {
            return this.backstop(this.method);
        }
        return this;
    }

    open() {
        if (this.method === methods.open) {
            return this.backstop(this.method);
        }
        return this;
    }

    done() {
        console.log(chalk.green(
            `Backstop ${this.method} successful`
        ));
        this.stopServer().then(() => {
            process.exit(0);
        });
    }

    fail(reason) {
        console.error(chalk.red(
            reason
        ));
        this.backstop(methods.open);
        this.stopServer().then(() => {
            process.exit(1);
        });
    }

    init(options) {
        return this.configure(options)
        .then(this.reference.bind(this))
        .then(this.test.bind(this))
        .then(this.open.bind(this))
        .then(this.done.bind(this))
        .catch(this.fail.bind(this));
    }

}

const backstop = new Backstop(config, run);
module.exports = backstop;
