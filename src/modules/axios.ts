import axios from 'axios'
import config from './config'

export default axios.create({
  baseURL: config.coinAPI.httpURL + '/v1',
  timeout: 1000,
  headers: { 'X-CoinAPI-Key': config.coinAPI.key }
})