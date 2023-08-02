const crypto = require('crypto')

const toMap = json => new Map(Object.entries(json))

const randomHexString = (length = 40) => {
  const bytes = Math.ceil(length / 2)
  const randomBytes = crypto.randomBytes(bytes)
  return randomBytes.toString('hex').slice(0, length)
}

module.exports = {
  dayjs: () => require('./dayjs'),
  httpJsonClient: () => require('./http-json-client'),
  toMap,
  randomHexString,
}
