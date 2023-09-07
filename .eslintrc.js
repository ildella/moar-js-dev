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
  ],
}
