/* eslint-disable no-underscore-dangle, no-console */
/**
* Handle node js logging to improve performance.
*
* @file
* @module
*
* @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
* @version 0.0.1
*
* @TODO: find good solution for universal logging - use async logging in
* node to improve performance
*
* @see {@link https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/?_ga=1.268359950.1276058548.1473272867}
* @see {@link http://expressjs.com/en/advanced/best-practice-performance}
* @see {@link https://github.com/mxstbr/react-boilerplate}
* @see {@link https://github.com/winstonjs/winston/issues/101}
* @see {@link https://github.com/pimterry/loglevel/blob/master/lib/loglevel.js}
* @see {@link https://github.com/cwebbdesign/isomorphic-logger/blob/master/index.js}
* @see {@link https://github.com/aurajs/aura/blob/master/lib/logger.js}
*
* @requires common/config/application
*
* @changelog
* - 0.0.1 basic functions and structure
*/
import { debug } from './../config/application';

const noop = Function.prototype;

/**
 * Get additional information to be passed into winston.Logger
 *
 * @function
 * @private
 * @returns {Object} The winston logger options
 */
function getLogOptions() {
    return {
        timestamp: Date.now(),
        pid: process.pid
    };
}

function Logger(name) {
    this.name = name;
    this._log = noop;
    this._warn = noop;
    this._error = noop;
    this._enabled = false;
    return this;
}

Logger.prototype = {

    setName: function setNameFn(name) {
        this.name = name;
    },

    isEnabled: function isEnabledFn() {
        return this._enabled;
    },

    enable: function enableFn(shouldBeEnabled) {

        if (!shouldBeEnabled) {
            return undefined;
        }

        const logFunctions = [
            'log', 'info', 'warn', 'error'
        ];

        if (console === undefined) {
            console = {}; // eslint-disable-line no-global-assign
        }

        this._log = console.log || noop;
        this._info = console.info || this._log;
        this._warn = console.warn || this._log;
        this._error = console.error || this._log;
        this._enabled = true;

        logFunctions.forEach(function forEachFn(val) {
            console[val] = Function.prototype.call.bind(console[val], console);
        });

        return this;
    },

    write: function writeFn(output, args) {
        if (!this.isEnabled) {
            return undefined;
        }

        const parameters = Array.prototype.slice.call(args);
        parameters.unshift(`${this.name}:`);
        parameters.push(getLogOptions());
        output.apply(console, parameters);

        return this;
    },

    log: function logFn() {
        return this.write(this._log, arguments); // eslint-disable-line prefer-rest-params
    },

    info: function infoFn() {
        return this.write(this._info, arguments); // eslint-disable-line prefer-rest-params
    },

    warn: function warnFn() {
        return this.write(this._warn, arguments); // eslint-disable-line prefer-rest-params
    },

    error: function errorFn() {
        return this.write(this._error, arguments); // eslint-disable-line prefer-rest-params
    }
};

export default new Logger('Application').enable(debug);
