#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console */
/**
 * Copy files from source to build folder.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @see {@link https://www.npmjs.com/package/imagemin}
 *
 * @requires cpx
 * @requires minimist
 * @requires chalk
 * @requires assert-plus
 *
 * @changelog
 * - 0.0.3 Add assert-plus as function parameter checker
 * - 0.0.2 Switched to node6
 * - 0.0.1 Basic functions and structure
 */
const cpx = require('cpx');
const minimist = require('minimist');
const chalk = require('chalk');
const assert = require('assert-plus');

const argv = minimist(process.argv.slice(2));
const argvDest = argv.d || './build/';
const argvFiles = [
    { source: './package.json', dest: argvDest },
    { source: './.env', dest: argvDest },
    { source: './public/js/**/*', dest: `${argvDest}/public/js` },
    { source: './public/img/**/*', dest: `${argvDest}/public/img` },
    { source: './public/font/**/*', dest: `${argvDest}/public/font` },
    { source: './public/*.{txt,json,xml,manifest}', dest: `${argvDest}/public/` },
    { source: './public/img/share/favicon.ico', dest: `${argvDest}/public/` }
];

/**
 * Ready callback when copy is successful.
 *
 * @function
 * @private
 * @param {Object} file The copied file config
 * @returns {void}
 */
function fileCopied(file) {
    assert.object(file, 'file');
    console.log(chalk.gray(`Copied file pattern ${file.source} > ${file.dest}`));
}

/**
 * Toggle through config and copy each file.
 *
 * @function
 * @private
 * @param {Array<Object>} files The files config to be copied
 * @returns {void}
 */
function copy(files) {
    assert.optionalArrayOfObject(files, 'files');

    const filesLength = files.length;
    if (!filesLength) {
        console.log(chalk.gray('Nothing to copy - no file pattern found.'));
        return;
    }

    console.log(chalk.green(`Copying ${filesLength} file patterns`));
    for (let i = 0; i < filesLength; i = i + 1) {
        cpx.copy(
            files[i].source,
            files[i].dest,
            {},
            fileCopied.bind(null, files[i])
        );
    }
}

copy(argvFiles);
