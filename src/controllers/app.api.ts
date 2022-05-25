import { Request as Req, Response as Res, NextFunction as Next } from 'express'

import axios from '../modules/axios'


export const getAllCryptoCurrencies = async (req: Req, res: Res, next: Next) => {
  try {
    const apiRes = await axios.get('/assets')
    res.json(apiRes.data)

  } catch (err) {
    console.log(err)
    res.status(500)
  }
}

export const getCryptoCurrencies = async (req: Req, res: Res, next: Next) => {
  try {
    const apiRes = await axios.get('/exchangerate/' + req.params.currencie + '?invert=false')
    res.json(apiRes.data)

  } catch (err) {
    console.log(err)
    res.status(500)
  }
}