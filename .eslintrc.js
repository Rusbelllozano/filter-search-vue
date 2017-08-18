module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'eol-last': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'semi': ['error', 'never'],
        'indent': ['warn', 4],
        'quotes': 0,
        'brace-style': 0,
        'no-trailing-spaces': 0,
        'spaced-comment': 0,
        'space-before-function-paren': ['warn', 'never'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}