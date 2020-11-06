/* eslint-disable immutable/no-mutation */
module.exports = {
    rootDir: '../../',
    bail: false,
    testRegex: '(/__tests__/.*|(\\.|/))\\.test.[jt]sx?$',
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/build/',
        '<rootDir>/docs/',
        '<rootDir>/report/',
        '<rootDir>/config/',
        '/mocks'
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    setupFiles: ['<rootDir>/config/jest/jest.setup.js'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/jest.each-test-setup.js'],
    verbose: true,
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    moduleDirectories: [
        'node_modules' // This is required
    ],
    testEnvironment: 'jsdom',
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
