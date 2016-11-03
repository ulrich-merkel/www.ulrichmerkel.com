#!/usr/bin/env node
/**
 * Minify images to improve page load times.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://www.npmjs.com/package/imagemin}
 *
 * @requires imagemin
 * @requires imagemin-mozjpeg
 * @requires imagemin-pngquant
 * @requires minimist
 *
 * @changelog
 * - 0.0.2 switched to node6
 * - 0.0.1 basic functions and structure
 */
const imagemin = require('imagemin'); // eslint-disable-line import/no-extraneous-dependencies
const imageminPngquant = require('imagemin-pngquant'); // eslint-disable-line import/no-extraneous-dependencies
const imageminJpegtran = require('imagemin-jpegtran'); // eslint-disable-line import/no-extraneous-dependencies
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const dest = argv.d || '../build/public/img/content/';
const imagesSources = [
    'home/',
    '/work/gedanken-kollektiv/',
    '/work/lebenswelt-schule/',
    '/work/momentariness/',
    '/work/revolution/',
    '/work/optik-ludewig/',
    '/work/summer-inspiration/',
    '/work/verlegeservice-bunge/'
];
const plugins = [
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
    if (files && files.length) {
        console.log(`${files.length} images minified`); // eslint-disable-line no-console
    }
}

// Toggle through config and minify each file
if (imagesSources.length) {
    for (let i = 0; i < imagesSources.length; i = i + 1) {
        imagemin(
            [`${dest}${imagesSources[i]}*.{jpg,png}`],
            `${dest}${imagesSources[i]}`,
            {
                plugins: plugins
            }
        ).then(imagesMinified);
    }
}
