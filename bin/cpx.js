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
const argvFiles = argv.f || [
    { source: './package.json', dest: argvDest },
    { source: './.env', dest: argvDest },
    { source: './yarn.lock', dest: argvDest },
    { source: './patches', dest: argvDest },
    { source: './public/js/**/*', dest: `${argvDest}/public/js` },
    { source: './public/img/**/*', dest: `${argvDest}/public/img` },
    { source: './public/font/**/*', dest: `${argvDest}/public/font` },
    {
        source: './public/*.{txt,json,xml,manifest,js}',
        dest: `${argvDest}/public/`
    },
    { source: './public/img/share/favicon.ico', dest: `${argvDest}/public/` }
];

/**
 * Ready callback when copy is successful.
 *
 * @private
 * @param {object} file - The copied file config
 * @returns {void}
 */
function fileCopied(file) {
    assert.object(file, 'file');
    console.log(
        chalk.green(`Copied file pattern ${file.source} > ${file.dest}`)
    );
}

/**
 * Toggle through config and copy each file.
 *
 * @param {Array<object>} files - The files config to be copied
 * @returns {void}
 */
function main(files) {
    assert.optionalArrayOfObject(files, 'files');

    const filesLength = files.length;
    if (!filesLength) {
        console.log(chalk.gray('Nothing to copy - no file pattern found.'));
        return;
    }

    console.log(chalk.gray(`Start copying ${filesLength} file patterns`));
    files.forEach(function forEachFile(file) {
        cpx.copy(file.source, file.dest, {}, fileCopied.bind(null, file));
    });
}

// Start routine
main(argvFiles);
