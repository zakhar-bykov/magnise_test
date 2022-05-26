import config from './modules/config'

import mongoose from 'mongoose'

const connection = async () => await mongoose.createConnection(config.mongo.url + '/' + config.mongo.db).asPromise()

// (err: any): void => { if (err) { throw err } else log('info', 'app', 'Mongo connected') }

export default connection