#!/usr/bin/env node
/**
 * Copy files from source to build folder.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://www.npmjs.com/package/imagemin}
 *
 * @requires cpx
 * @requires minimist
 *
 * @changelog
 * - 0.0.2 switched to node6
 * - 0.0.1 basic functions and structure
 */
const cpx = require('cpx'); // eslint-disable-line import/no-extraneous-dependencies
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const dest = argv.d || './../build/';
const files = [
    { source: './package.json', dest: dest },
    { source: './.env', dest: dest },
    { source: './public/js/**/*', dest: `${dest}/public/js` },
    { source: './public/img/**/*', dest: `${dest}/public/img` },
    { source: './public/font/**/*', dest: `${dest}/public/font` },
    { source: './public/*.{txt,json,xml,manifest}', dest: `${dest}/public/` },
    { source: './public/img/share/favicon.ico', dest: `${dest}/public/` }
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
    console.log(`Copied ${file.source} > ${file.dest}`); // eslint-disable-line no-console
}

// Toggle through config and copy each file
if (files.length) {
    for (let i = 0; i < files.length; i = i + 1) {
        cpx.copy(
            files[i].source,
            files[i].dest,
            {},
            fileCopied.bind(null, files[i])
        );
    }
}
