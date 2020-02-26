/* eslint-disable immutable/no-mutation */

module.exports = {
    rootDir: '../../',
    bail: true,
    testRegex: '(/__jest__/.*|(\\.|/)(test|spec))\\.jsx?$',
    testPathIgnorePatterns: [
        '<rootDir>/(build|docs|node_modules)/'
    ],
    setupTestFrameworkScriptFile: '<rootDir>/config/jest/jest.each-test-setup.js',
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
