import { Request as Req, Response as Res, NextFunction as Next } from 'express'

export const getCryptoCurency = async (req: Req, res: Res, next: Next) => {
    return res.send('BTC: 1')
}