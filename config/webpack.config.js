'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    stats: true,
    context: __dirname + '/../application',
    entry: {
        client: './client/client.jsx',
        loader: './client/loader.jsx'
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
