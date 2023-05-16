# README

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/moar-js-dev.svg?style=flat-square)](https://npmjs.com/package/moar-js-dev)
[![Build](https://github.com/ildella/moar-js-dev/actions/workflows/build.yml/badge.svg)](https://github.com/ildella/moar-js-dev/actions)

This project has the minimal objective to provide:

  * A single dependency with all I need for linting and testing code.
  * A project structure to mix up **unit**, **integration** and **functional tests** that can target different technologies and working niceley together, in a single project, with indipendend setup and timeout.
  * Common code for testing stuff
    - Initially only a simple testing module for HTTP APIs. 
  
The linting part brings together 3 different configurations:

  * [A basic config](https://github.com/ildella/eslint-config-node-moar)
  * [A stricter config](https://github.com/ildella/eslint-config-node-moar-stricter) with functional programming specifics rules
  * [A config for tests](https://github.com/ildella/eslint-config-node-moar-test)

All of this works for Node.js projects, in pure **JavaScript**.

## Setup your project using moar-js-dev

First add it as development dependency

```shell
yarn add -D moar-js-dev
# Or...
npm install -D moar-js-dev
```

Then just copy and paste a couple files to have a new projet up and running

  * A sample [.eslintrc.js](./.eslintrc.js) 
  * And copy this minimal `jest.config.js`

```js
const {jest: {preset}} = require('moar-js-dev')

module.exports = {
  ...preset(),
  projects: [
    '<rootDir>/tests/unit',
    '<rootDir>/tests/integration',
  ],
}
```

That's it.
