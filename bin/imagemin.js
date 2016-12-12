#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console, no-void */
/**
 * Minify images to improve page load times.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.3
 *
 * @see {@link https://www.npmjs.com/package/imagemin}
 *
 * @requires imagemin
 * @requires imagemin-mozjpeg
 * @requires imagemin-pngquant
 * @requires minimist
 * @requires chalk
 * @requires assert-plus
 *
 * @changelog
 * - 0.0.3 Add assert-plus as function parameter checker
 * - 0.0.2 switched to node6
 * - 0.0.1 basic functions and structure
 */
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const minimist = require('minimist');
const chalk = require('chalk');
const assert = require('assert-plus');

const argv = minimist(process.argv.slice(2));
const argvDest = argv.d || '../build/public/img/content/';
const argvFolders = argv.f || [
    'home/',
    '/work/gedanken-kollektiv/',
    '/work/lebenswelt-schule/',
    '/work/momentariness/',
    '/work/revolution/',
    '/work/optik-ludewig/',
    '/work/summer-inspiration/',
    '/work/verlegeservice-bunge/'
];
const argvPlugins = argv.p || [
    imageminPngquant({
        quality: '65-80'
    }),
    imageminJpegtran()
];

/**
 * Ready callback when images are successfully minified.
 *
 * @function
 * @private
 * @param {Array} files The minified images
 * @returns {void}
 */
function imagesMinified(files) {
    assert.optionalArray(files, 'files');
    if (files && files.length) {
        console.log(chalk.green(`${files.length} images minified`));
    }
}

/**
 * Toggle through folder config and minify each file.
 *
 * @function
 * @private
 * @param {Array<string>} folders The folders for locating images
 * @param {string} dest The destination path
 * @param {Array} [plugins=[]] The optional imagemin plugins
 * @returns {void}
 */
function run(folders, dest, plugins = []) {
    assert.optionalArrayOfString(folders, 'folders');
    assert.optionalString(dest, 'dest');
    assert.optionalArray(plugins, 'plugins');

    const foldersLength = folders.length;
    if (!foldersLength) {
        console.log(chalk.gray('Nothing to minify - no image folders found.'));
        return;
    }

    if (!dest) {
        console.log(chalk.gray('No image destination configured.'));
        return;
    }

    console.log(chalk.gray(`Start minifying ${foldersLength} image folders`));
    for (let i = 0; i < foldersLength; i = i + 1) {
        imagemin(
            [`${dest}${folders[i]}*.{jpg,png}`],
            `${dest}${folders[i]}`,
            {
                plugins
            }
        ).then(imagesMinified);
    }
}

run(argvFolders, argvDest, argvPlugins);
