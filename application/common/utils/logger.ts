/* eslint-disable no-underscore-dangle, no-console, immutable/no-mutation */
/**
 * Handle node js logging to improve performance.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 *
 * @TODO find good solution for universal logging - use async logging in
 * node to improve performance
 *
 * @see {@link https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/?_ga=1.268359950.1276058548.1473272867}
 * @see {@link http://expressjs.com/en/advanced/best-practice-performance}
 * @see {@link https://github.com/mxstbr/react-boilerplate}
 * @see {@link https://github.com/winstonjs/winston/issues/101}
 * @see {@link https://github.com/pimterry/loglevel/blob/master/lib/loglevel.js}
 * @see {@link https://github.com/cwebbdesign/isomorphic-logger/blob/master/index.js}
 * @see {@link https://github.com/aurajs/aura/blob/master/lib/logger.js}
 */
import { debug } from '../config/application';
import { getDateNow } from './date';

const noop = Function.prototype;

interface LoggerType {
    setName: Function;
    isEnabled: Function;
    enable: Function;
    write: Function;
    log: Function;
    info: Function;
    warn: Function;
    error: Function;
}

/**
 * Get additional information to be passed into winston.LoggerType
 *
 * @private
 * @returns {object} The winston logger options
 */
function getLogOptions() {
    return {
        timestamp: getDateNow(),
        pid: process && process.pid
    };
}

/**
 * Create custom logger on top of console log.
 *
 * @param {string} name - The prefix to be used for messages
 * @returns {object} The current logger instance
 */
function Logger(name: string): LoggerType {
    this.name = name;
    this._log = noop;
    this._info = noop;
    this._warn = noop;
    this._error = noop;
    this._enabled = false;

    return this;
}

Logger.prototype = {
    /**
     * Set prefix for messages.
     *
     * @param {string} name - The prefix to be used
     * @returns {void}
     */
    setName: function setNameFn(name: string): void {
        if (name) {
            this.name = name;
        }
    },

    /**
     * Check if logging is available.
     *
     * @returns {boolean} Whether logging is enabled or not
     */
    isEnabled: function isEnabledFn(): boolean {
        return this._enabled;
    },

    /**
     * Enable logging and declare basic log functions.
     *
     * @param {boolean} shouldBeEnabled - A switch to easily control enabling/disabling
     * @returns {void}
     */
    enable: function enableFn(shouldBeEnabled: boolean): void {
        if (!shouldBeEnabled) {
            this._enabled = false;
            return;
        }

        if (typeof console === 'undefined') {
            console = {}; // eslint-disable-line no-global-assign
        }

        this._log = console.log || noop;
        this._info = console.info || this._log;
        this._warn = console.warn || this._log;
        this._error = console.error || this._log;
        this._enabled = true;

        const logFunctions = ['log', 'info', 'warn', 'error'];
        logFunctions.forEach(function forEachFn(val) {
            console[val] = Function.prototype.call.bind(console[val], console);
        });
    },

    /**
     * Write messages to console functions.
     *
     * @private
     * @param {object} output - The implemented console log function (log, error, etc...)
     * @param {object} args - The messages to be logged
     * @returns {void}
     */
    write: function writeFn(output: Object, args: Object): void {
        if (!this._enabled) {
            return;
        }

        const parameters = Array.prototype.slice.call(args);
        parameters.unshift(`${this.name}:`);
        parameters.push(getLogOptions());
        output.apply(console, parameters);
    },

    /**
     * Write messages to standard log.
     *
     * @returns {object} The current logger instance
     */
    log: function logFn(): LoggerType {
        return this.write(this._log, arguments); // eslint-disable-line prefer-rest-params
    },

    /**
     * Write messages to info log.
     *
     * @returns {object} The current logger instance
     */
    info: function infoFn(): LoggerType {
        return this.write(this._info, arguments); // eslint-disable-line prefer-rest-params
    },

    /**
     * Write messages to warn log.
     *
     * @returns {object} The current logger instance
     */
    warn: function warnFn(): LoggerType {
        return this.write(this._warn, arguments); // eslint-disable-line prefer-rest-params
    },

    /**
     * Write messages to error log.
     *
     * @returns {object} The current logger instance
     */
    error: function errorFn(): LoggerType {
        return this.write(this._error, arguments); // eslint-disable-line prefer-rest-params
    }
};

const logger = new Logger('Application');
logger.enable(debug);

export { logger };
