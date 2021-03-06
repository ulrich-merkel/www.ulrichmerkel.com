/**
 * Es6 module for application cache server middleware.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import { EOL } from 'os';
import assert from 'assert-plus';
import { Request, Response } from 'express';

import { configApplication } from '../../common/config/application';
import configPictures from '../../common/config/pictures';
import { getDateNow } from '../../common/utils/date';

const configApplicationCache = configApplication.applicationCache;

type Size = {
    width: number;
    height: number;
    minWidth: number;
};

/**
 * Get cache timestamp to ease updates.
 *
 * @private
 * @returns {number} The timestamp to be used
 */
function getTimeStamp(): number {
    if (configApplicationCache.timeStamp) {
        return configApplicationCache.timeStamp;
    }
    return getDateNow();
}

/**
 * Helper function to get dynamic picture sizes as valid cache url.
 *
 * @private
 * @param {string} path - The image path
 * @param {Array.<string>} sizes - The responsive image sizes
 * @param {string} fallbackSize - The fallback size if no picture is supported
 * @param {string} [extension='jpg'] - The image file extension
 * @returns {string} The manifest entry
 */
function addPictureSizes(
    path: string,
    sizes: Size[],
    fallbackSize: string,
    extension = 'jpg'
) {
    assert.string(path, 'path');
    assert.array(sizes, 'sizes');
    assert.string(fallbackSize, 'fallbackSize');
    assert.string(extension, 'extension');

    const response = [];

    if (!sizes.length) {
        return EOL;
    }

    sizes.forEach(function handleSize(size) {
        const imageSize = `${size.width}x${size.height}`;
        response.push(
            `${path}@${imageSize}.${extension} ${path}@${fallbackSize}.${extension}`
        );
    });

    return response.join(EOL);
}

/**
 * Get the application cache response as valid string.
 *
 * @private
 * @returns {string} The manifest content
 */
function getApplicationCacheResponse(): string {
    const {
        sizes: {
            keyvisual: pictureSizesKeyvisual,
            keyvisualWork: pictureSizesKeyvisualWork,
            keyvisualWorkPrint: pictureSizesKeyvisualWorkPrint,
            featured: pictureSizesFeatured
        }
    } = configPictures;

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

    response.push(
        addPictureSizes(
            './img/content/home/keyvisual',
            pictureSizesKeyvisual,
            '720x480'
        )
    );

    response.push(
        addPictureSizes(
            './img/content/home/featured--optik-ludewig',
            pictureSizesFeatured,
            '160x160'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/home/featured--summer-inspiration',
            pictureSizesFeatured,
            '160x160'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/home/featured--momentariness',
            pictureSizesFeatured,
            '160x160'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/home/featured--lebenswelt-schule',
            pictureSizesFeatured,
            '160x160'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/home/featured--revolution',
            pictureSizesFeatured,
            '160x160'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/home/featured--verlegeservice-bunge',
            pictureSizesFeatured,
            '160x160'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/home/featured--gedanken-kollektiv',
            pictureSizesFeatured,
            '160x160'
        )
    );

    response.push(
        addPictureSizes(
            './img/content/work/optik-ludewig/optik-ludewig--keyvisual',
            pictureSizesKeyvisualWork,
            '320x173',
            'png'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/work/summer-inspiration/summer-inspiration--keyvisual',
            pictureSizesKeyvisualWork,
            '320x173',
            'png'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/work/momentariness/momentariness--keyvisual',
            pictureSizesKeyvisualWork,
            '320x173',
            'png'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/work/lebenswelt-schule/lebenswelt-schule--keyvisual',
            pictureSizesKeyvisualWork,
            '320x173',
            'png'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/work/revolution/revolution--keyvisual',
            pictureSizesKeyvisualWorkPrint,
            '355x479',
            'png'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/work/verlegeservice-bunge/verlegeservice-bunge--keyvisual',
            pictureSizesKeyvisualWork,
            '320x173',
            'png'
        )
    );
    response.push(
        addPictureSizes(
            './img/content/work/gedanken-kollektiv/gedanken-kollektiv--keyvisual',
            pictureSizesKeyvisualWork,
            '320x173',
            'png'
        )
    );

    response.push(EOL);

    return response.join('' + EOL); // eslint-disable-line prefer-template
}

/**
 * Middleware to serve offline application cache manifest file.
 *
 * @param {object} req - The current request object
 * @param {object} res - The result object
 * @returns {Future}
 */
export function middlewareApplicationCache(
    req: Request,
    res: Response
): Promise<Response> {
    assert.object(req, 'req');
    assert.object(res, 'res');

    // Delete previously store caches by sending 404
    if (!configApplicationCache.use) {
        return res.status(404).send('Not found.');
    }

    // @TODO Adjust caching
    return res
        .status(200)
        .set('Content-Type', 'text/cache-manifest')
        .send(getApplicationCacheResponse());
}
