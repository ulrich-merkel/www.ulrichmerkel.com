#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console, no-void */
/**
 * Helper to create build directory structure.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://gist.github.com/bpedro/742162}
 * @see {@link http://stackoverflow.com/questions/12627586/is-node-js-rmdir-recursive-will-it-work-on-non-empty-directories}
 *
 * @TODO: use promises
 *
 * @requires fs
 * @requires rimraf
 * @requires minimist
 * @requires chalk
 * @requires assert-plus
 *
 * @changelog
 * - 0.0.2 Add assert-plus as function parameter checker
 * - 0.0.1 Basic functions and structure
 */
const fs = require('fs');
const rimraf = require('rimraf');
const minimist = require('minimist');
const chalk = require('chalk');
const assert = require('assert-plus');

const argv = minimist(process.argv.slice(2));
const argvDestFolder = argv.d || './build/';

const config = [
    {
        name: 'application'
    },
    {
        name: 'public',
        folders: [
            {
                name: 'public/js'
            }
        ]
    },
    {
        name: 'report'
    }
];

/**
 * Function will check if a target directory exists, and create
 * it if it doesn't.
 *
 * @function
 * @private
 * @param {string} directory - The directory name
 * @param {Function} callback - The ready callback
 * @returns {void}
 */
function checkBuildDirectory(directory, callback) {
    assert.string(directory, 'directory');
    assert.func(callback, 'callback');

    fs.stat(directory, function statFn(error) { // eslint-disable-line security/detect-non-literal-fs-filename
        if (error && error.code === 'ENOENT') {
            return void fs.mkdir(directory, callback); // eslint-disable-line security/detect-non-literal-fs-filename
        }
        return callback();
    });
}

/**
 * Convinient function to walk through folder config.
 *
 * @function
 * @private
 * @param {Array} folders - The folders to be checked
 * @param {Function} callback - The final ready function
 * @returns {void}
 */
function runThroughFolders(folders, callback) {
    assert.optionalArray(folders, 'folders');
    assert.func(callback, 'callback');

    if (folders && folders.length) {
        folders.forEach(function forEachFn(folder) {
            callback(folder);
        });
    }
}

/**
 * Delete files from folders.
 *
 * @function
 * @private
 * @param {Array} folders - The folders to be checked
 * @param {Function} callback - The final ready function
 * @returns {void}
 */
function emptyFolders(folders, callback) {
    assert.array(folders, 'folders');
    assert.func(callback, 'callback');

    runThroughFolders(folders, function runThroughFoldersFn(folder) {
        rimraf(`${argvDestFolder}${folder.name}`, function rimrafFn(error) {
            if (error) {
                return void console.warn(chalk.red(error));
            }
            return void callback();
        });
    });
}

/**
 * Create folders based on config.
 *
 * @function
 * @private
 * @param {Array} folders - The folders to be checked
 * @returns {void}
 */
function createFolders(folders) {
    assert.optionalArray(folders, 'folders');

    runThroughFolders(folders, function runThroughFoldersFn(folder) {
        fs.mkdir(`${argvDestFolder}${folder.name}`, function mkdirFn(error) { // eslint-disable-line security/detect-non-literal-fs-filename
            if (error) {
                if (error.code === 'EEXIST') {
                    return void console.log(chalk.grey(`${error.path} already exists`));
                }
                return void console.warn(chalk.red(error));
            }
            return void createFolders(folder.folders);
        });
    });
}

// Start routine
checkBuildDirectory(argvDestFolder, function checkDirectoryFn() {
    emptyFolders(config, function emptyFoldersFn() {
        createFolders(config);
    });
});
