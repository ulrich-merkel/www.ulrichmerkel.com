/**
 * Es6 module for server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @requires os
 * @requires common/config/application
 * @requires common/config/pictures
 *
 * @changelog
 * - 0.0.2 moved code to es6
 * - 0.0.1 basic functions and structure
 */
import { EOL } from 'os';

import configApplication from './../../common/config/application';
import configPictures from './../../common/config/pictures';
import { getDateNow } from './../../common/utils/date';

const configApplicationCache = configApplication.applicationCache;

/**
 * Get cache timestamp to ease updates.
 *
 * @returns {string}
 */
function getTimeStamp() {
    if (configApplicationCache.timeStamp) {
        return configApplicationCache.timeStamp;
    }
    return getDateNow();
}


/**
 * Helper function to get dynamic picture sizes as valid cache url.
 *
 * @function
 * @private
 * @param {string} path
 * @param {Array.<string>} sizes
 * @param {string} fallbackSize
 * @param {string} extension
 * @returns {string}
 */
function addPictureSizes(path, sizes, fallbackSize, extension = 'jpg') {

    const response = [];

    if (!sizes.length) {
        return response;
    }

    sizes.forEach(function handleSize(size) {
        const imageSize = `${size.width}x${size.height}`;
        response.push(`${path}@${imageSize}.${extension} ${path}@${fallbackSize}.${extension}`);
    });

    return response.join(EOL);
}

/**
 * Get the application cache response as valid string.
 *
 * @function
 * @private
 * @returns {string}
 */
function getApplicationCacheResponse() {
    const { sizes: {
        keyvisual: pictureSizesKeyvisual,
        keyvisualWork: pictureSizesKeyvisualWork,
        keyvisualWorkPrint: pictureSizesKeyvisualWorkPrint,
        featured: pictureSizesFeatured
    } } = configPictures;

    const response = [];

    response.push('CACHE MANIFEST');
    response.push(EOL);

    response.push('# Our cached resources');
    response.push(`# Version ${getTimeStamp()}`);
    response.push(EOL);

    response.push('CACHE:');

    response.push('./js/client.bundle.js');
    response.push('./css/app.css');
    response.push('./font/icomoon/icomoon.eot?41546266');
    response.push('./font/icomoon/icomoon.eot?41546266#iefix');
    response.push('./font/icomoon/icomoon.svg?41546266#fonticons');
    response.push('./font/icomoon/icomoon.ttf?41546266');
    response.push('./font/icomoon/icomoon.woff?41546266');
    response.push(EOL);

    response.push('NETWORK:');

    response.push('*');
    response.push(EOL);

    response.push('FALLBACK:');

    response.push(addPictureSizes('./img/content/home/keyvisual', pictureSizesKeyvisual, '720x480'));

    response.push(addPictureSizes('./img/content/home/featured--optik-ludewig', pictureSizesFeatured, '160x160'));
    response.push(addPictureSizes('./img/content/home/featured--summer-inspiration', pictureSizesFeatured, '160x160'));
    response.push(addPictureSizes('./img/content/home/featured--momentariness', pictureSizesFeatured, '160x160'));
    response.push(addPictureSizes('./img/content/home/featured--lebenswelt-schule', pictureSizesFeatured, '160x160'));
    response.push(addPictureSizes('./img/content/home/featured--revolution', pictureSizesFeatured, '160x160'));
    response.push(addPictureSizes('./img/content/home/featured--verlegeservice-bunge', pictureSizesFeatured, '160x160'));
    response.push(addPictureSizes('./img/content/home/featured--gedanken-kollektiv', pictureSizesFeatured, '160x160'));

    response.push(addPictureSizes('./img/content/work/optik-ludewig/optik-ludewig--keyvisual', pictureSizesKeyvisualWork, '320x173', 'png'));
    response.push(addPictureSizes('./img/content/work/summer-inspiration/summer-inspiration--keyvisual', pictureSizesKeyvisualWork, '320x173', 'png'));
    response.push(addPictureSizes('./img/content/work/momentariness/momentariness--keyvisual', pictureSizesKeyvisualWork, '320x173', 'png'));
    response.push(addPictureSizes('./img/content/work/lebenswelt-schule/lebenswelt-schule--keyvisual', pictureSizesKeyvisualWork, '320x173', 'png'));
    response.push(addPictureSizes('./img/content/work/revolution/revolution--keyvisual', pictureSizesKeyvisualWorkPrint, '355x479', 'png'));
    response.push(addPictureSizes('./img/content/work/verlegeservice-bunge/verlegeservice-bunge--keyvisual', pictureSizesKeyvisualWork, '320x173', 'png'));
    response.push(addPictureSizes('./img/content/work/gedanken-kollektiv/gedanken-kollektiv--keyvisual', pictureSizesKeyvisualWork, '320x173', 'png'));

    response.push(EOL);

    return response.join('' + EOL); // eslint-disable-line prefer-template
}

/**
 * Middleware to serve offline application cache manifest file.
 *
 * @function
 * @param {Object} req The current request object
 * @param {Object} res The result object
 * @returns {Future}
 */
function middlewareApplicationCache(req, res) {

    // delete previously store caches by sending 404
    if (!configApplicationCache.use) {
        return res
            .status(404)
            .send('Not found.');
    }

    // @TODO: Adjust caching
    return res
        .status(200)
        .set('Content-Type', 'text/cache-manifest')
        .send(getApplicationCacheResponse());

}

export default middlewareApplicationCache;
