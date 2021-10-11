/* eslint-disable */
module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    quotes: ['error', 'double'],
  },
  parserOptions: {
    requireConfigFile: false,
  },
};