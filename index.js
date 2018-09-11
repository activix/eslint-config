module.exports = {
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'arrow-body-style': 'off',
        'arrow-parens': 0,
        'consistent-return': 'warn',
        'eqeqeq': 'off',
        'generator-star-spacing': 0,
        'import/extensions': ['error', 'ignorePackages'],
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'max-len': ['warn', { code: 200, tabWidth: 4, ignoreStrings: true, ignoreTemplateLiterals: true }],
        'no-continue': 'off',
        'no-mixed-operators': 'off',
        'no-new': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'off',
        'no-restricted-syntax': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'object-shorthand': ['error', 'always'],
        'prefer-const': ['warn', { destructuring: 'all' }],
        'prefer-destructuring': 'warn',
        'semi': ['error', 'always', { omitLastInOneLineBlock: true }],
        'vue/attributes-order': ['warn', { order: ['GLOBAL', 'DEFINITION', 'UNIQUE', 'OTHER_ATTR', 'BINDING', 'EVENTS', 'LIST_RENDERING', 'CONTENT', 'RENDER_MODIFIERS', 'TWO_WAY_BINDING', 'CONDITIONALS'] }],
        'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
        'vue/html-closing-bracket-spacing': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', { singleline: 2 }],
        'vue/prop-name-casing': ['error'],
        'vue/script-indent': ['error', 4, { baseIndent: 1, switchCase: 1 }],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['!*.vue'],
            rules: {
                'vue/script-indent': 'off',
            },
        },
    ],
};
