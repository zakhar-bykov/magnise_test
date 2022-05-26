import { AssetStoredInfo } from './currencies'

export interface AssetInfo extends AssetStoredInfo {
  asset_id: string,
  name: string,
  type_is_crypto: number,
  data_quote_start: string,
  data_trade_start: string,
  data_start: string,

  real_time_value: number,
  value_update_time: string
}
