/* eslint-disable immutable/no-mutation */
'use strict';

const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const sourcePath = path.join(__dirname, '/../application');

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv)
        }
    })
];

if (isProduction) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })
    );
}

module.exports = {
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    stats: true,
    context: sourcePath,
    entry: {
        client: './client/client.jsx',
        bootstrap: './client/bootstrap.jsx'
    },
    output: {
        path: __dirname + '/../build/public/js',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: [
                        'stage-0',
                        'react',
                        'es2015'
                    ] }
                }]
            }
        ]
    },
    plugins
};
