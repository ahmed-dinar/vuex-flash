// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": 'module'
  },
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": false,
    "mocha": true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "indent": [2, 2, {
      "SwitchCase": 1,
      "MemberExpression": 1
    }],
    "eqeqeq": 0,
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "no-multi-spaces": 2,
    "no-redeclare": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "newline-per-chained-call": [2, { "ignoreChainWithDepth": 2 }],
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};