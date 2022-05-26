import { Request as Req, Response as Res, NextFunction as Next } from 'express'

import { AssetInfo } from '../types/responses'
import { AssetDocument } from '../models/currencies'
import currenciesService from '../service/currencies'

import { CError } from '../types/error'


export const getCryptoCurrenciesList = async (req: Req, res: Res, next: Next) => {
  try {
    const list: AssetDocument[] = await currenciesService.getCurrenciesList({ isCrypto: true })
    res.json(list)

  } catch (err) {
    console.log(err)

    if (err instanceof CError)
      res.status(err.code).send({ message: err.msg, details: err.details })
    else
      res.status(500)
  }
}

export const getCryptoCurrenciesInfo = async (req: Req, res: Res, next: Next) => {
  try {
    const currencies = req.params.currencies.split(/[,;\s]/)
    const info: AssetInfo[] = await currenciesService.getCurrenciesInfo(currencies)
    res.json(info)

  } catch (err) {
    console.log(err)

    if (err instanceof CError)
      res.status(err.code).send({ message: err.msg, details: err.details })
    else
      res.status(500)
  }
}