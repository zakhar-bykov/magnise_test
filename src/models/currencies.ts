import mongoose from '../mongo.connection'
import { model, Schema, Model, Document } from 'mongoose'

import { AssetStoredInfo } from '../types/currencies'

export interface AssetDocument extends AssetStoredInfo, Document {
    _id: string
    asset_id: string
    name: string
    type_is_crypto: number
    data_quote_start: string
    data_trade_start: string
    data_start: string
}

const AssetSchema: Schema = new Schema<AssetDocument>({
    asset_id: { type: String, unic: true },
    name: { type: String },
    type_is_crypto: { type: Number },
    data_quote_start: { type: String },
    data_trade_start: { type: String },
    data_start: { type: String }
})

export const AssetModel: Model<AssetDocument> = mongoose.model<AssetDocument>('Asset', AssetSchema, 'assets')

export default AssetModel