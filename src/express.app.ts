import express from 'express'
const app: express.Application = express()

import middlewares from './express/middlewares'
import routes from './express/routes'

app.use(middlewares)
app.use(routes)

export default app