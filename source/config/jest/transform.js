/* eslint-disable import/no-extraneous-dependencies*/
const babelDev = require('./babel.jest');
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer(babelDev);
