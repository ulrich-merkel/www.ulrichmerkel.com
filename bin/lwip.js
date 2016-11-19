#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies, no-console, no-void */
/**
 * Resize images based on config json to build all responsive image sizes.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @see {@link https://github.com/EyalAr/lwip}
 *
 * @requires lwip
 * @requires minimist
 * @requires application/config/picture
 *
 * @TODO: Add winston logging for performance
 * @TODO: Adjust and implement config rotate if needed
 *
 * @changelog
 * - 0.0.2 switched to node6
 * - 0.0.1 basic functions and structure
 */
const lwip = require('lwip');
const minimist = require('minimist'); // eslint-disable-line import/no-extraneous-dependencies

const argv = minimist(process.argv.slice(2));
const folder = argv.d || './build/';
const picture = require('./../application/common/config/pictures');

const pictureSizesKeyvisual = picture.sizes.keyvisual;
const pictureSizesKeyvisualWork = picture.sizes.keyvisualWork;
const pictureSizesKeyvisualWorkPrint = picture.sizes.keyvisualWorkPrint;
const pictureSizesFeatured = picture.sizes.featured;
const pictureSizesAppleTouchIcon = picture.sizes.appleTouchIcon;
const pictureSizesAppleTouchStartupImage = picture.sizes.appleTouchStartupImage;
const pictureSizesIcon = picture.sizes.icon;
const config = {
    srcFolder: 'public/img/',
    destFolder: `${folder}/public/img/`,
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
            // @TODO: adjust and implement config rotate if needed!
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
const configSrcFolder = config.srcFolder;
const configDestFolder = config.destFolder;
const configImages = config.images;

/**
 * Resize given image via node js helper module.
 *
 * @function
 * @private
 * @param {string} src The image source file
 * @param {string} dest The resized image destination
 * @param {string|number} width The resized image width
 * @param {string|number} height The resized image width
 * @returns {void}
 */
function resize(src, dest, width, height) {
    lwip.open(src, function handleOpenImage(openError, image) {
        if (openError) {
            return void console.error(openError);
        }

        return void image
            .batch()
            .cover(width, height)
            .writeFile(dest, function handleWriteFile(writeError) {
                if (writeError) {
                    return void console.error(writeError);
                }
                return void console.log(`File written: ${dest}`);
            });
    });
}

// Run resize helper for all given image files
if (configImages && configImages.length) {
    configImages.forEach(function handleForEachImages(image) {

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
            const source = `${configSrcFolder}${path}${name}.${ext}`;
            const destination = `${configDestFolder}${path}${name}${separator}${width}x${height}.${ext}`;

            resize(source, destination, width, height);

        });

    });
}
