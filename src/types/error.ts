export class CError extends Error {
    public msg: string
    public code: number
    public details: object

    constructor(msg: string, code?: number, details?: object) {
        super(msg)

        this.msg = msg
        this.code = code || 500
        this.details = details || {}
    }
}