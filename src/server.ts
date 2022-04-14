import http from 'http'
import app from './app'
import { HOST, PORT } from './config'

const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`listening on ${HOST}:${PORT}`)
})
