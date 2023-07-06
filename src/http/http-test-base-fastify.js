const httpJsonClient = require('../commons/http-json-client')

module.exports = app => ({
  start: () => app.listen({
    port: 0,
    host: '0.0.0.0',
  }),
  stop: () => app.close(),
  client: ({headers = {}} = {}) => {
    const {address, port} = app.server.address()
    const jsonClient = httpJsonClient({baseURL: `http://${address}:${port}`})
    return jsonClient({headers})
  },
  address: () => app.server.address(),
})
