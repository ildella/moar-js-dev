const {eslintConfigs, commons: {httpJsonClient}} = require('../../src')

test('package', () => {
  expect(typeof httpJsonClient).toBe('function')
  expect(typeof eslintConfigs.jestFpUnicornEslintConfig).toBe('function')
})
