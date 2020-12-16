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
        'immutable/no-mutation': 'off',
        'import/no-named-default': 'off',
        'import/prefer-default-export': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'warn',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'warn',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-tag-names': [
            'warn',
            {
                definedTags: ['changelog', 'TODO']
            }
        ],
        'jsdoc/check-types': 'warn',
        'jsdoc/newline-after-description': 'warn',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-hyphen-before-param-description': 'warn',
        'jsdoc/require-param': 'warn',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-param-type': 'warn',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns-type': 'warn',
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton']
            }
        ],
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/autocomplete-valid': 'error',
        'jsx-a11y/click-events-have-key-events': 'error',
        'jsx-a11y/heading-has-content': [
            'error',
            {
                components: ['Headlint']
            }
        ],
        'jsx-a11y/html-has-lang': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/lang': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-autofocus': 'error',
        'jsx-a11y/no-distracting-elements': [
            'error',
            {
                elements: ['marquee', 'blink']
            }
        ],
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
        'jsx-a11y/no-noninteractive-tabindex': 'error',
        'jsx-a11y/no-onchange': 'error',
        'jsx-a11y/no-redundant-roles': [
            'error',
            {
                nav: ['navigation']
            }
        ],
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'jsx-a11y/tabindex-no-positive': 'error',
        'linebreak-style': ['error', 'unix'],
        'lodash/import-scope': 'off',
        'lodash/prefer-constant': 'off',
        'lodash/prefer-lodash-method': 'off',
        'no-mixed-operators': ['error', { allowSamePrecedence: true }],
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['draft'] }
        ],
        'no-use-before-define': 'off',
        'no-void': 'warn',
        'one-var': [
            'error',
            {
                var: 'always',
                let: 'always',
                const: 'never'
            }
        ],
        'operator-assignment': ['error', 'never'],
        'prefer-arrow-callback': 'off',
        'promise/always-return': 'error',
        'promise/avoid-new': 'warn',
        'promise/catch-or-return': 'error',
        'promise/no-callback-in-promise': 'warn',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'react/jsx-fragments': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx', '.tsx', '.ts'] }
        ],
        'react/prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-danger': 'off',
        'security/detect-buffer-noassert': 'error',
        'security/detect-child-process': 'error',
        'security/detect-eval-with-expression': 'error',
        'security/detect-no-csrf-before-method-override': 'error',
        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-non-literal-regexp': 'error',
        'security/detect-non-literal-require': 'error',
        'security/detect-object-injection': 'off',
        'security/detect-possible-timing-attacks': 'error',
        'security/detect-pseudoRandomBytes': 'error',
        'security/detect-unsafe-regex': 'error',
        'xss/no-location-href-assign': 2,
        'xss/no-mixed-html': 0
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
                '@typescript-eslint/no-explicit-any': 'off',
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
