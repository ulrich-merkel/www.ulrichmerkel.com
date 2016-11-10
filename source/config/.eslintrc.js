module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "jasmine": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "flowtype"
    ],
    "rules": {
        "arrow-body-style": 0,
        "comma-dangle": ["error", "never"],
        "indent": [
            "error",
            4
        ],
        "jsx-quotes": ["error", "prefer-single"],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [1, 220],
        "no-mixed-operators": ["error", {"allowSamePrecedence": true}],
        "no-void": 1,
        "one-var": [2, {
            "var": "always", // Exactly one var declaration per function
            "let": "always", // Exactly one let declaration per block
            "const": "never" // Exactly one declarator per const declaration per block
        }],
        "operator-assignment": ["error", "never"],
        "padded-blocks": 0,
        "prefer-arrow-callback": 0,
        "quotes": [
            "error",
            "single"
        ],
        "react/forbid-prop-types": 1,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": ["error", 4],
        "semi": [
            "error",
            "always"
        ]
    }
};
