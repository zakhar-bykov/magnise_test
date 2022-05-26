import axios from '../modules/axios'

import { AssetInfo } from '../types/responses'
import { AssetReqRes } from '../types/req-responses'
import { AssetStoredInfo } from '../types/currencies'
import { AssetDocument, AssetModel } from '../models/currencies'
import { CError } from '../types/error'

interface options {
  isCrypto?: boolean
}

class CurrenciesService {
  public async init() {
    const currencies: AssetDocument[] = await this.dbFindAssetCurrencies(['BTC', 'ETH'])

    if (currencies.length === 2)
      return

    const assets = await this.getAssets()
    const assetsStoredInfo: AssetStoredInfo[] = assets.map((a: AssetReqRes): AssetStoredInfo => {
      return {
        asset_id: a.asset_id,
        name: a.name,
        type_is_crypto: a.type_is_crypto,
        data_quote_start: a.data_quote_start,
        data_trade_start: a.data_trade_start,
        data_start: a.data_start
      }
    })

    const createdAssets: AssetDocument[] = await AssetModel.create(assetsStoredInfo)
    console.log('Initialize database')
  }


  public async getCurrenciesList(options?: options): Promise<AssetDocument[]> {
    let query = {}

    if (options && options.isCrypto)
      query = { type_is_crypto: options.isCrypto ? 1 : 0 }

    const list: AssetDocument[] = await AssetModel.find(query).select('asset_id name data_quote_start data_trade_start -_id')

    return list
  }

  public async getCurrenciesInfo(ids: string[]): Promise<AssetInfo[]> {
    const currencies: AssetDocument[] = await this.dbFindAssetCurrencies(ids)

    if (currencies.length === 0)
      return []

    const response: AssetInfo[] = currencies.map((a: AssetDocument): AssetInfo => {
      const assetInfo: AssetInfo = {
        asset_id: a.asset_id,
        name: a.name,
        type_is_crypto: a.type_is_crypto,
        data_quote_start: a.data_quote_start,
        data_trade_start: a.data_trade_start,
        data_start: a.data_start,
        real_time_value: 1,
        value_update_time: 'today'
      }

      return assetInfo
    })

    return response
  }


  private async getAssets(ids?: string[]): Promise<AssetReqRes[]> {
    const url = ids && ids.length ? '/assets/' + ids.join(';') : '/assets'
    const apiRes = await axios.get(url)
    const assets: AssetReqRes[] = apiRes.data

    return assets
  }

  private async dbFindAssetCurrencies(ids: string[]): Promise<AssetDocument[]> {
    const currencies: AssetDocument[] = await AssetModel.find({ asset_id: ids }).select('-_id')
    return currencies
  }
}


const currenciesService = new CurrenciesService()
currenciesService.init()

export default currenciesService