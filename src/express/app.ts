import express from 'express'
const app: express.Application = express()

import middlewares from './middlewares'
import routes from './routes'

app.use(middlewares)
app.use(routes)

export default app