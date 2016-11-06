/* eslint-disable import/no-extraneous-dependencies*/
const babelDev = require('./babel.jest');
const babelJest = require('babel-jest');

/**
 * Rewriting css imports, @see {@link https://github.com/facebook/jest/issues/334}
 * Default is module.exports = babelJest.createTransformer(babelDev);
 */
module.exports = {
    process: function (src, filename) {
        if (filename.match(/\.[css|less|scss]/)) {
            return '';
        }
        return babelJest
            .createTransformer(babelDev)
            .process(src, filename).replace(/require\(\'[^\']+\.css\'\);/gm, '')
    }
};
