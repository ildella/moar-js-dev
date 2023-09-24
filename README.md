# Moar JS Dev.

A convenient shell project to bring in all development dependencies I use in one shot.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/moar-js-dev.svg?style=flat-square)](https://npmjs.com/package/moar-js-dev)
[![Build](https://github.com/ildella/moar-js-dev/actions/workflows/build.yml/badge.svg)](https://github.com/ildella/moar-js-dev/actions)

## Lint

The linting part brings together 3 different configurations:

  * [A basic config](https://github.com/ildella/eslint-config-node-moar)
  * [A stricter config](https://github.com/ildella/eslint-config-node-moar-stricter) with functional programming specifics rules
  * [A config for tests](https://github.com/ildella/eslint-config-node-moar-test)

All of this works for Node.js projects, in pure **JavaScript**.

## Setup a new project with `moar-js-dev`

First add it as development dependency

```shell
yarn add -D moar-js-dev
# Or...
npm install -D moar-js-dev
```

One can just use this sample [.eslintrc.js](./.eslintrc.js). 

That's it.
