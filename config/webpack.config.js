/* eslint-disable immutable/no-mutation */
/**
 * Configuration file for webpack, which is a static module bundler for modern
 * JavaScript applications.
 *
 * 
 * Standard and additional production plugins are added with built-in optimizations 
 * accordingly when NODE_ENV is set.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2018
 * @version 0.0.1
 *
 * @see {@link https://webpack.js.org/}
 *
 * @requires webpack
 * @requires path
 *
 * @changelog
 * - 0.0.1 Basic function and structure
 */
'use strict';

const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const sourcePath = resolve('/../application');

/**
 * Webpack configuration.
 *
 * @type {Object}
 */
module.exports = {
    mode: nodeEnv,
    devtool: isProduction
        ? false
        : 'inline-source-map',
    stats: true,
    context: sourcePath,
    entry: {
        'js/client': './client/client.jsx',
        'js/bootstrap': './client/bootstrap.jsx',
        'service-worker': './client/service-worker.jsx'
    },
    output: {
        path: __dirname + '/../build/public/',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: [
                        'es2015',
                        'react',
                        'stage-0'
                    ] }
                }]
            }
        ]
    }
};
