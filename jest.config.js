/*
  Documentation:
    https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
*/

const preset = require('./src/jest/jest.preset')

module.exports = {
  ...preset,
  projects: [
    '<rootDir>/tests/unit',
    '<rootDir>/tests/http',
  ],
}
