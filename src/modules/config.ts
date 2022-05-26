require('dotenv').config({ path: __dirname + '/../../config/.env' })

export const config = {
    app: {
        env: process.env.NODE_ENV || 'development',
    },
    server: {
        port: parseInt(process.env.PORT || '3000'),
        host: process.env.HOST || 'localhost'
    },
    mongo: {
        url: process.env.MONGO_URL || '',
        db: process.env.MONGO_DB || ''
    },
    coinAPI: {
        key: process.env.COIN_API_KEY || '',
        httpURL: process.env.COIN_API_HTTP_URL || '',
        wsURL: process.env.COIN_API_WS_URL || ''
    }
}

export default config