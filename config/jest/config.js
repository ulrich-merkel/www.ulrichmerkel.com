module.exports = {
    'rootDir': '../../',
    // 'rootDir': './../../',
    'bail': true,
    //'testRegex': '<rootDir>(/__jest__/.*|\\.(test|spec))\\.(js|jsx)$',
    'testRegex': '(/__jest__/.*|(\\.|/)(test|spec))\\.jsx?$',
    'testPathIgnorePatterns': [
        '<rootDir>/(build|docs|node_modules)/'
    ],
    "setupFiles": [
        "<rootDir>/config/jest/setup.js"
    ],
    "transform": {
        "^.+\\.jsx$": "<rootDir>/config/jest/transform.js"
    },
    'verbose': true,
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
};
