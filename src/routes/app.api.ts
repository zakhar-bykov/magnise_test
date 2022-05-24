import express from 'express'

const router: express.Router = express.Router()

import * as apiController from '../controllers/app.api'


router.get('/getcc', apiController.getCryptoCurency)

//

export default router