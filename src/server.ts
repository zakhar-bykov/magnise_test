import config from './modules/config'
import app from './express.app'
import mongoose from './mongo.connection'

const server = require('http').createServer(app)

mongoose.connect(config.mongo.url + config.mongo.db)
server.listen(config.server.port, () => console.log('Express server started on port: ' + config.server.port))


/* import ws from './ws.connection'
import wsHello from './types/ws.hello'

console.log('ws')
ws.on('open', () => {
  ws.send( JSON.stringify(wsHello) )
})

ws.on('message', (data: Buffer) => {
  console.log((data.toString()))
}) */