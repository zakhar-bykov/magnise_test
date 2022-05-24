import 'dotenv/config'

export const config = {
    app: {
        env: process.env.NODE_ENV || 'development',
    },
    server: {
        port: parseInt(process.env.PORT || '3000'),
        host: process.env.HOST || 'localhost'
    },
    coinAPI: {
        session: process.env.COIN_API_KEY || '',
        httpURL: process.env.COIN_API_HTTP_URL || '',
        wsURL: process.env.COIN_API_WS_URL || ''
    }
}

export default config