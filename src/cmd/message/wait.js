const toUri = require('../../lib/multiaddr-to-uri')
const { ok } = require('../../lib/fetch')
const toCamel = require('../../lib/to-camel')

module.exports = (fetch, config) => {
  return async (messageCid, options) => {
    options = options || {}
    const arg = encodeURIComponent(messageCid.toString())
    const url = `${toUri(config.apiAddr)}/api/message/wait?arg=${arg}`
    const res = await ok(fetch(url, { signal: options.signal }))
    return toCamel(await res.json())
  }
}