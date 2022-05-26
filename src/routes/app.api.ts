import express from 'express'

const router: express.Router = express.Router()

import * as api from '../controllers/app.api'


router.get('/crypto-currencies', api.getCryptoCurrenciesList)
router.get('/crypto-currencies/:currencies', api.getCryptoCurrenciesInfo)

//

export default router