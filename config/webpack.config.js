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
 * @requires path
 *
 * @changelog
 * - 0.0.1 Basic function and structure
 */
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

/**
 * @private
 * @param {string} dir - The directory to be resolved
 * @returns {string} The correct directory path
 */
function resolve(dir) {
    return path.join(__dirname, dir);
}

const nodeEnv = process.env.NODE_ENV || dotenv.config().parsed.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const sourcePath = resolve('/../application');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv) // it will automatically pick up key values from .env file
        }
    })
];

/**
 * Webpack configuration.
 *
 * @type {object}
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
        path: `${__dirname}/../build/public/`,
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {
            // @see {@link https://medium.com/@sanchit3b/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0}
            process: 'process/browser'
        },
        extensions: [
            '.js',
            '.json',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/,
                    `${__dirname}/../build/`
                ],
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    plugins: plugins
};
