import express from 'express'

const router: express.Router = express.Router()

import apiRoute from '../routes/app.api'

router.use('/api', apiRoute)

export default router