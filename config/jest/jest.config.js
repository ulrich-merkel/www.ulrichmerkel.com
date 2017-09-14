/* eslint-disable immutable/no-mutation */
'use strict';

module.exports = {
    'rootDir': '../../',
    'bail': true,
    'testRegex': '(/__jest__/.*|(\\.|/)(test|spec))\\.jsx?$',
    'testPathIgnorePatterns': [
        '<rootDir>/(build|docs|node_modules)/'
    ],
    'setupFiles': [
        '<rootDir>/config/jest/jest.setup.js'
    ],
    'transform': {
        '^.+\\.jsx$': '<rootDir>/config/jest/jest.transform.js'
    },
    'verbose': true,
    'moduleFileExtensions': [
        'js',
        'jsx'
    ],
    'testEnvironment': 'node',
    'coverageDirectory': '<rootDir>/report/',
    'coverageThreshold': {
        'global': {
            'branches': 50,
            'functions': 65,
            'lines': 65,
            'statements': 65
        }
    },
    'collectCoverage': true
};
