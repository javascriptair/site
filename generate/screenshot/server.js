/* eslint no-console:0 */
import {resolve} from 'path'
import StaticServer from 'static-server'

let address

export default runServer

function runServer(cb) {
  if (address) {
    cb(address)
    return
  }
  const port = 8899
  const rootPath = resolve(__dirname, '..', '..')
  const server = new StaticServer({
    rootPath,
    port,
  })
  server.start(() => {
    address = `http://localhost:${port}`
    console.log('server listening at: ' + address)
    console.log('with a root at: ' + rootPath)
    cb(address)
  })
}
