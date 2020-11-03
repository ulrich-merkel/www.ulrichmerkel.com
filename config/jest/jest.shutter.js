/* eslint-disable immutable/no-mutation */

module.exports = {
    rootDir: '../../',
    bail: true,
    testRegex: '(/__shutter__/.*|(\\.|/)(test|spec))\\.jsx?$',
    testPathIgnorePatterns: [
        '<rootDir>/(build|docs|node_modules)/'
    ],
    setupFiles: [
        '<rootDir>/config/jest/jest.setup.js'
    ],
    setupTestFrameworkScriptFile: '<rootDir>/config/jest/jest.each-test-setup.js',
    transform: {
        '^.+\\.jsx$': '<rootDir>/config/jest/jest.transform.js'
    },
    verbose: true,
    moduleFileExtensions: [
        'js',
        'jsx',
        'json'
    ],
    testEnvironment: 'node',
    coverageDirectory: '<rootDir>/report/',
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 65,
            lines: 65,
            statements: 65
        }
    },
    collectCoverage: true
};
