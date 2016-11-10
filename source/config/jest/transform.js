/* eslint-disable import/no-extraneous-dependencies*/
const babelJest = require('babel-jest');
const babelDev = require('./babel.jest');

module.exports = babelJest.createTransformer(babelDev);
