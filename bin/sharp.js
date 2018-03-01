#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console, no-void */
/**
 * Resize images based on config json to build all responsive image sizes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2017
 * @version 0.0.5
 *
 * @see {@link http://sharp.dimens.io/}
 *
 * @requires fs
 * @requires sharp
 * @requires minimist
 * @requires chalk
 * @requires assert-plus
 * @requires application/config/pictures
 *
 * @TODO: Add winston logging for performance
 * @TODO: Add verbose option to reduce logging
 *
 * @changelog
 * - 0.0.5 Adding check if file exists before starting resize
 * - 0.0.4 Moving lwip to sharp
 * - 0.0.3 Add assert-plus as function parameter checker
 * - 0.0.2 Switched to node6
 * - 0.0.1 Basic functions and structure
 */
const fs = require('fs');
const sharp = require('sharp');
const minimist = require('minimist');
const chalk = require('chalk');
const assert = require('assert-plus');
const pictures = require('./../application/common/config/pictures');

const argv = minimist(process.argv.slice(2));
const argvSrcFolder = argv.s || './';
const argvDestFolder = argv.d || './build/';
const argvImageFolder = argv.i || '/public/img/';

/**
 * Get configuration for image resizing.
 *
 * @private
 * @param {Object} sizesConfig - The image size config for different image types and responsive resolutions
 * @param {string} srcFolder - The main source folder
 * @param {string} destFolder - The main build bolder
 * @param {string} imageFolder - The image folder path (relative to main source/build folder)
 * @returns {Object} The parsed config object
 */
function getConfig(sizesConfig, srcFolder, destFolder, imageFolder) {
    assert.object(sizesConfig, 'sizesConfig');
    assert.string(srcFolder, 'srcFolder');
    assert.string(destFolder, 'destFolder');
    assert.string(imageFolder, 'imageFolder');

    const pictureSizesKeyvisual = sizesConfig.sizes.keyvisual;
    const pictureSizesKeyvisualWork = sizesConfig.sizes.keyvisualWork;
    const pictureSizesKeyvisualWorkPrint = sizesConfig.sizes.keyvisualWorkPrint;
    const pictureSizesFeatured = sizesConfig.sizes.featured;
    const pictureSizesAppleTouchIcon = sizesConfig.sizes.appleTouchIcon;
    const pictureSizesAppleTouchStartupImage = sizesConfig.sizes.appleTouchStartupImage;
    const pictureSizesIcon = sizesConfig.sizes.icon;

    const config = {
        srcFolder: `${srcFolder}${imageFolder}`,
        destFolder: `${destFolder}${imageFolder}`,
        images: [
            {
                name: 'keyvisual',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesKeyvisual
            },
            {
                name: 'featured--gedanken-kollektiv',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'featured--optik-ludewig',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'featured--lebenswelt-schule',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'featured--momentariness',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'featured--revolution',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'featured--summer-inspiration',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'featured--verlegeservice-bunge',
                ext: 'jpg',
                path: 'content/home/',
                sizes: pictureSizesFeatured
            },
            {
                name: 'optik-ludewig--keyvisual',
                ext: 'png',
                path: 'content/work/optik-ludewig/',
                sizes: pictureSizesKeyvisualWork
            },
            {
                name: 'summer-inspiration--keyvisual',
                ext: 'png',
                path: 'content/work/summer-inspiration/',
                sizes: pictureSizesKeyvisualWork
            },
            {
                name: 'momentariness--keyvisual',
                ext: 'png',
                path: 'content/work/momentariness/',
                sizes: pictureSizesKeyvisualWork
            },
            {
                name: 'lebenswelt-schule--keyvisual',
                ext: 'png',
                path: 'content/work/lebenswelt-schule/',
                sizes: pictureSizesKeyvisualWork
            },
            {
                name: 'revolution--keyvisual',
                ext: 'png',
                path: 'content/work/revolution/',
                sizes: pictureSizesKeyvisualWorkPrint
            },
            {
                name: 'verlegeservice-bunge--keyvisual',
                ext: 'png',
                path: 'content/work/verlegeservice-bunge/',
                sizes: pictureSizesKeyvisualWork
            },
            {
                name: 'gedanken-kollektiv--keyvisual',
                ext: 'png',
                path: 'content/work/gedanken-kollektiv/',
                sizes: pictureSizesKeyvisualWork
            },
            {
                name: 'apple-touch-icon',
                ext: 'png',
                path: 'share/',
                sizes: pictureSizesAppleTouchIcon,
                separator: '-'
            },
            {
                name: 'apple-touch-startup-image',
                ext: 'png',
                path: 'share/',
                sizes: pictureSizesAppleTouchStartupImage
            },
            {
                name: 'icon',
                ext: 'png',
                path: 'share/',
                sizes: pictureSizesIcon
            }
        ]
    };

    return config;
}

/**
 * Resize given image via node js helper module.
 *
 * @private
 * @param {string} src - The image source file
 * @param {string} dest - The resized image destination
 * @param {number} width - The resized image width
 * @param {number} height - The resized image width
 * @param {number} [degrees=0] - The resized image rotation
 * @returns {void}
 */
function resize(src, dest, width, height, degrees = 0) {
    assert.string(src, 'src');
    assert.string(dest, 'dest');
    assert.number(width, 'width');
    assert.number(height, 'height');
    assert.optionalNumber(height, 'height');

    // @TODO: Disable eslint rule due to a known bug
    // @see {@link https://github.com/nodesecurity/eslint-plugin-security/issues/13}
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (!fs.existsSync(src)) {
        return void console.error(chalk.red(`Image file ${src} not found`));
    }

    sharp(src)
        .resize(width, height)
        .rotate(degrees)
        .background({r: 255, g: 255, b: 255, alpha: 1})
        .toFile(dest, function handleWriteFile (error) {
            if (error) {
                return void console.error(chalk.red(error));
            }
            return void console.log(chalk.green(`Image file written: ${dest}`));
        });
}

/**
 * Run resize helper for all given image files.
 *
 * @param {Object} config - The resize config
 * @returns {void}
 */
function main(config) {
    const images = config.images;
    const srcFolder = config.srcFolder;
    const destFolder = config.destFolder;

    if (!images || !images.length) {
        return void console.log(chalk.grey('No images provided for resizing'));
    }

    if (!srcFolder) {
        return void console.log(chalk.grey('No images source folder provided for resizing'));
    }

    if (!destFolder) {
        return void console.log(chalk.grey('No images destination folder provided for resizing'));
    }

    console.log(chalk.grey(`Start resizing for ${images.length} images`));
    return void images.forEach(function handleForEachImages(image) {
        const name = image.name;
        const path = image.path;
        const ext = image.ext;
        const sizes = image.sizes;
        const separator = image.separator || '@';

        if (!sizes || !sizes.length) {
            return;
        }

        sizes.forEach(function handleForEachSizes(size) {
            const width = size.width;
            const height = size.height;
            const degrees = size.degrees;
            const source = `${srcFolder}${path}${name}.${ext}`;
            const destination = `${destFolder}${path}${name}${separator}${width}x${height}`;

            // Creating original file extension and webp for browsers which
            // supports these format
            resize(source, `${destination}.${ext}`, width, height, degrees);
            resize(source, `${destination}.webp`, width, height, degrees);
        });
    });
}

// Start routine
main(getConfig(pictures, argvSrcFolder, argvDestFolder, argvImageFolder));
