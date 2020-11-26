/* eslint-disable immutable/no-mutation */
// @see {@link https://stackoverflow.com/questions/62953124/configure-eslint-to-parse-ts-and-tsx-as-typescript-and-js-and-jsx-as-ecmascr}
module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        jasmine: true,
        jest: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:lodash/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        '@babel',
        'compat',
        'flowtype',
        'immutable',
        'import',
        'jest',
        'jsdoc',
        'jsx-a11y',
        'lodash',
        'new-with-error',
        'promise',
        'react',
        'security',
        'tree-shaking',
        'xss',
        'prettier'
    ],
    settings: {
        'import/resolver': {
            // This loads <rootdir>/tsconfig.json to eslint
            // Otherwise we should use @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/linting}
            typescript: {}
        }
    },
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ],
        'immutable/no-mutation': 0,
        'import/no-named-default': 0,
        'import/prefer-default-export': 0,
        // 'jest/no-large-snapshots': [
        //     'warn',
        //     {
        //         maxSize: 12
        //     }
        // ],
        'jsdoc/check-param-names': 1,
        'jsdoc/check-tag-names': [
            1,
            {
                definedTags: ['changelog', 'TODO', 'flow']
            }
        ],
        'jsdoc/check-types': 1,
        'jsdoc/newline-after-description': 1,
        'jsdoc/require-description-complete-sentence': 0,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 1,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton']
            }
        ],
        'jsx-a11y/href-no-hash': 'off', // @see {@link https://github.com/facebookincubator/create-react-app/issues/2631}
        'linebreak-style': ['error', 'unix'],
        'lodash/import-scope': 0,
        'lodash/prefer-constant': 0,
        'lodash/prefer-lodash-method': 0,
        'no-mixed-operators': ['error', { allowSamePrecedence: true }],
        'no-void': 1,
        'no-use-before-define': 0,
        'one-var': [
            2,
            {
                var: 'always',
                let: 'always',
                const: 'never'
            }
        ],
        'operator-assignment': ['error', 'never'],
        'prefer-arrow-callback': 0,
        'promise/always-return': 'error',
        'promise/avoid-new': 'warn',
        'promise/catch-or-return': 'error',
        'promise/no-callback-in-promise': 'warn',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'react/jsx-fragments': 0,
        'react/jsx-closing-tag-location': 0,
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx', '.ts'] }
        ],
        'react/prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-danger': 0,
        'security/detect-buffer-noassert': 2,
        'security/detect-child-process': 2,
        'security/detect-eval-with-expression': 2,
        'security/detect-no-csrf-before-method-override': 2,
        'security/detect-non-literal-fs-filename': 0,
        'security/detect-non-literal-regexp': 2,
        'security/detect-non-literal-require': 2,
        'security/detect-object-injection': 0,
        'security/detect-possible-timing-attacks': 2,
        'security/detect-pseudoRandomBytes': 2,
        'security/detect-unsafe-regex': 2
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
                'plugin:prettier/recommended'
            ],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/explicit-module-boundary-types': [
                    'error',
                    {
                        allowArgumentsExplicitlyTypedAsAny: true
                    }
                ]
            }
        }
    ]
};
