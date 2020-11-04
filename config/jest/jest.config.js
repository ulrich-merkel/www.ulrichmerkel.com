/* eslint-disable immutable/no-mutation */
module.exports = {
    rootDir: '../../',
    bail: true,
    testRegex: '(/__jest__/.*|(\\.|/)(test|spec))\\.jsx?$',
    testPathIgnorePatterns: [
        '<rootDir>/(build|docs|node_modules|report|config)/',
        '/mocks'
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    setupFiles: [
        '<rootDir>/config/jest/jest.setup.js'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/config/jest/jest.each-test-setup.js'
    ],
    verbose: true,
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'ts',
        'tsx'
    ],
    moduleDirectories: [
        'node_modules' // This is required
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
