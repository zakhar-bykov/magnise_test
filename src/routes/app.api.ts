import express from 'express'

const router: express.Router = express.Router()

import * as api from '../controllers/app.api'


router.get('/crypto-currencies', api.getAllCryptoCurrencies)
router.get('/crypto-currencies/:currencie', api.getCryptoCurrencies)

//

export default router