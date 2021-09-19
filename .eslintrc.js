module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser'
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 0,
            ignores: []
        }],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        'eol-last': 'off',
        'no-multiple-empty-lines': ['error', {
            max: 2
        }]
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
};
