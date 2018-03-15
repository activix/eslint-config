module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
        worker: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ["html"],
    rules: {
        'arrow-body-style': 'off',
        'arrow-parens': 0,
        'eqeqeq': 'off',
        'generator-star-spacing': 0,
        'import/extensions': 'off',
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
        'no-undef': 'off',
        'object-shorthand': ['error', 'always'],
        'prefer-const': 'off',
        'semi': ['error', 'always', { omitLastInOneLineBlock: true }],
    },
};
