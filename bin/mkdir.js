#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console, no-void */
/**
 * Helper to create build directory structure.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @see {@link https://gist.github.com/bpedro/742162}
 * @see {@link http://stackoverflow.com/questions/12627586/is-node-js-rmdir-recursive-will-it-work-on-non-empty-directories}
 *
 * @TODO: use promises
 *
 * @requires fs
 * @requires rimraf
 * @requires minimist
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
const fs = require('fs');
const rimraf = require('rimraf');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const dest = argv.d || './build/';

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
        name: 'reports'
    }
];

/**
 * Function will check if a directory exists, and create it if it doesn't.
 *
 * @param {string} directory
 * @param {Function} callback
 * @returns {void}
 */
function checkDirectory(directory, callback) {
    fs.stat(directory, function statFn(error) {
        if (error && error.code === 'ENOENT') {
            return void fs.mkdir(directory, callback);
        }
        return callback();
    });
}

/**
 * Walk through folder config.
 *
 * @param {Object} folders
 * @param {Function} callback
 * @returns {void}
 */
function runThroughFolders(folders, callback) {
    if (folders && folders.length) {
        folders.forEach(function forEachFn(folder) {
            callback(folder);
        });
    }
}

/**
 * Delete files from folders.
 *
 * @param {Object} folders
 * @param {Function} callback
 * @returns {void}
 */
function emptyFolders(folders, callback) {
    runThroughFolders(folders, function runThroughFoldersFn(folder) {
        rimraf(`${dest}${folder.name}`, function rimrafFn(error) {
            if (error) {
                return void console.warn(error);
            }
            return void callback();
        });
    });
}

/**
 * Create folders based on config.
 *
 * @param {Object} folders
 * @returns {void}
 */
function createFolders(folders) {
    runThroughFolders(folders, function runThroughFoldersFn(folder) {
        fs.mkdir(`${dest}${folder.name}`, function mkdirFn(error) {
            if (error) {
                if (error.code === 'EEXIST') {
                    console.log(`${error.path} already exists`);
                    return;
                }
                console.warn(error);
                return;
            }
            if (folder.folders && folder.folders.length) {
                createFolders(folder.folders);
            }
        });
    });
}

// Start routine
checkDirectory(dest, function checkDirectoryFn() {
    emptyFolders(config, function emptyFoldersFn() {
        createFolders(config);
    });
});
