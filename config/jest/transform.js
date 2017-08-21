/* eslint-disable import/no-extraneous-dependencies, immutable/no-mutation */
const babelJest = require('babel-jest');
const babelDev = require('./babel.jest');

module.exports = babelJest.createTransformer(babelDev);
