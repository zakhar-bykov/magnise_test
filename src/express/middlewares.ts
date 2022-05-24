import express from 'express'

import helmet from 'helmet'
import morgan from 'morgan'

const router: express.Router = express.Router()

router.use( express.json() )
router.use( express.urlencoded({ extended: true }) )

// router.use( helmet.contentSecurityPolicy() )
// router.use( helmet.crossOriginEmbedderPolicy() )
// router.use( helmet.crossOriginOpenerPolicy() )
// router.use( helmet.crossOriginResourcePolicy() )
// router.use( helmet.dnsPrefetchControl() )
// router.use( helmet.expectCt() )
router.use( helmet.frameguard() )
// router.use( helmet.hidePoweredBy() )
// router.use( helmet.hsts() )
// router.use( helmet.ieNoOpen() )
// router.use( helmet.noSniff() )
// router.use( helmet.originAgentCluster() )
// router.use( helmet.permittedCrossDomainPolicies() )
router.use( helmet.referrerPolicy({ policy: ['origin'] }) )
// router.use(helmet.xssFilter())

router.use( morgan(':method :url :status - :response-time ms') )

export default router