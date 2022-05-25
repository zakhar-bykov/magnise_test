import config from './modules/config'
import app from './express.app'

const server = require('http').createServer(app)

server.listen(config.server.port, () => console.log('Express server started on port: ' + config.server.port))