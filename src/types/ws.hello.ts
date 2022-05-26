import config from '../modules/config'

export default {
  'type': 'hello',
  'apikey': config.coinAPI.key,
  'symbol_id': 'BTC',
  'heartbeat': false,
  'subscribe_data_type': ['trade']
}
