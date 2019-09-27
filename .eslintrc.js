module.exports = {
  extends: 'airbnb-base',
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  globals: {},
  rules: {
    'no-constant-condition': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'security/no-block-members': 0,
    'no-plusplus': 'off',
    'import/no-named-as-default': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-continue': 0,
    'no-loop-func': 0,
    'prefer-destructuring': 0,
  },
};
