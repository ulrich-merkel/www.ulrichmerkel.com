/* eslint-disable immutable/no-mutation */
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
        'prettier/@typescript-eslint',
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
        'xss'
    ],
    settings: {
        'import/resolver': {
            // This loads <rootdir>/tsconfig.json to eslint
            // Otherwise we should use https://react-typescript-cheatsheet.netlify.app/docs/basic/linting
            typescript: {}
        }
    },
    rules: {
        'arrow-body-style': 0,
        'comma-dangle': ['error', 'never'],
        'immutable/no-let': 2,
        'immutable/no-this': 0,
        'immutable/no-mutation': 2,
        indent: ['error', 4],
        'import/no-named-default': 0,
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
        'jest/no-large-snapshots': [
            'warn',
            {
                maxSize: 12
            }
        ],
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
        'jsx-quotes': ['error', 'prefer-single'],
        'linebreak-style': ['error', 'unix'],
        'lodash/import-scope': 0,
        'lodash/prefer-noop': 0,
        'lodash/prefer-lodash-method': 0,
        'max-len': [1, 220],
        'no-mixed-operators': ['error', { allowSamePrecedence: true }],
        'no-void': 1,
        'one-var': [
            2,
            {
                var: 'always',
                let: 'always',
                const: 'never'
            }
        ],
        'operator-assignment': ['error', 'never'],
        'padded-blocks': 0,
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
        quotes: ['error', 'single'],
        'react/forbid-prop-types': 1,
        'react/jsx-fragments': 0,
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-curly-brace-presence': [
            'off',
            {
                props: 'always',
                children: 'ignore'
            }
        ],
        'security/detect-buffer-noassert': 2,
        'security/detect-child-process': 2,
        'security/detect-eval-with-expression': 2,
        'security/detect-no-csrf-before-method-override': 2,
        'security/detect-non-literal-fs-filename': 2,
        'security/detect-non-literal-regexp': 2,
        'security/detect-non-literal-require': 2,
        'security/detect-object-injection': 0,
        'security/detect-possible-timing-attacks': 2,
        'security/detect-pseudoRandomBytes': 2,
        'security/detect-unsafe-regex': 2,
        semi: ['error', 'always']
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: 'typescript-eslint-parser',
            rules: {
                'no-undef': 'off'
            }
        }
    ]
};
