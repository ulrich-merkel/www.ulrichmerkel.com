#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console */
/**
 * Copy files from source to build folder.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @TODO: Use process.version, use more functions
 *
 * @requires minimist
 * @requires chalk
 * @requires assert-plus
 *
 * @changelog
 * - 0.0.2 Add assert-plus as function parameter checker
 * - 0.0.1 Basic functions and structure
 */
const minimist = require('minimist');
const chalk = require('chalk');
const assert = require('assert-plus');

const argv = minimist(process.argv.slice(2));
const checkNpm = argv.npm || false;
const checkNode = argv.node || false;
const silent = !!argv.silent || false;

/**
 * Get specified version number listed in the engines section
 * in the package.json file.
 *
 * @function
 * @private
 * @param {boolean} isNpm If the npm cli option is passed or not
 * @param {boolean} isNode If the node cli option is passed or not
 * @returns {string} The version number based on process env
 */
function getPackageVersion(isNpm, isNode) {
    assert.optionalBool(isNpm, 'isNpm');
    assert.optionalBool(isNode, 'isNode');

    const environment = process.env;
    if (isNpm) {
        return environment.npm_package_engines_npm;
    }
    if (isNode) {
        return environment.npm_package_engines_node;
    }
    return '';
}

/**
 * Get installed version number.
 *
 * @function
 * @private
 * @param {string} version The passed cli version option
 * @returns {string} The parsed installed version number
 */
function getInstalledVersion(version) {
    assert.optionalString(version, 'version');

    if (!version) {
        return '';
    }

    /**
     * node --version is returning something like v6.5.0 while
     * npm --version will return 3.10.3
     */
    return version.charAt(0) === 'v' ? version.substr(1) : version;
}

const plattform = checkNpm ? 'npm' : (checkNode ? 'node' : ''); // eslint-disable-line no-nested-ternary
const installedVersion = getInstalledVersion(argv.version);
const packageVersion = getPackageVersion(checkNpm, checkNode);

if (packageVersion !== installedVersion) {
    console.error(chalk.red(
        `${plattform} version: Installed version ${installedVersion} and requested package.json version ${packageVersion} don't match!`
    ));
    process.exit(silent ? 0 : 1);
}

console.log(chalk.green(
    `${plattform} version: Installed version ${installedVersion}`
));
process.exit(0);
