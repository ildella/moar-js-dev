module.exports = {
  extends: [
    'node-moar',
  ],
  plugins: [
    'jest',
    'fp',
    'unicorn',
  ],
  overrides: [
    {
      files: ['**/src/**'],
      extends: [
        'node-moar-stricter',
      ],
      rules: {'node/no-unpublished-require': 'off'},
    },
    {
      files: [
        '**/tests/**',
        '**/fixtures/**',
        '**/scripts/**',
        '.eslintrc.js',
        'jest.config.js',
        'jest.config.*.js',
      ],
      extends: [
        'node-moar-test',
      ],
      rules: {'no-console': 'off'},
    },
  ],
}
