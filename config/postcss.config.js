/* eslint-disable immutable/no-mutation */
const postcssEpub = require('postcss-epub');
const postcssPresetEnv = require('postcss-preset-env');
const postcssAutoprefixer = require('autoprefixer');

module.exports = {
    plugins: [postcssEpub(), postcssPresetEnv(), postcssAutoprefixer()]
};
