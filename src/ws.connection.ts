import config from './modules/config'
import ws from 'ws'

const wsConnection = new ws(config.coinAPI.wsURL)

/* wsConnection.on('open', function open() {
  const hello = {
    'type': 'hello',
    'apikey': process.env.COIN_API_KEY,
    'heartbeat': false,
    'subscribe_data_type': [ 'quote' ],
    'subscribe_filter_asset_id': [ 'BTC', 'ETH' ]
  }

  wsConnection.send( JSON.stringify(hello) )
}) */

/* wsConnection.on('message', function incoming(data: Buffer) {
  console.log((data).toString())
}) */

export default wsConnection