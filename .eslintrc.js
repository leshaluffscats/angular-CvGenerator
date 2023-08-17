module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  globals: {
    window: true,
    module: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/*.html', '**/*.directive.ts'],
  rules: {
    'no-empty-function': ['error', { 'allow': ['constructors'] }],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
};
