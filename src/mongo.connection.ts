import config from './modules/config'

import mongoose from 'mongoose'

mongoose.createConnection(config.mongo.url + config.mongo.db)

// mongoose.openUri(config.mongo.url + config.mongo.db)
// (err: any): void => { if (err) { throw err } else log('info', 'app', 'Mongo connected') }

export default mongoose