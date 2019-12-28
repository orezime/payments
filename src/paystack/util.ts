import { Options } from '../../typings'

export class Util {
    options: Options

    constructor(options: Options) {
        this.options = options
    }

    validateContext(requiredFields: Array<string>, context: any): void {
        try {
            let keys = Object.keys(context), found = true
            requiredFields.forEach(requiredField => {
                found = found && keys.includes(requiredField)
            })

            const docs = 'https://developers.paystack.co/reference',
                msg = `Missing field(s). The method your trying to call requires the following object fields ${requiredFields} as params. ${docs}`
            if (!found) throw new Error(msg + docs)
        } catch (err) {
            throw err
        }
    }

    buildQueryParams(context: any): string {
        try {
            let query = '', keys = Object.keys(context)
            if (keys.length <= 0) return query
            for (let key in context) {
                query += `${key}=${context[key]}`
            }
            return `?${query}`
        } catch (err) {
            throw err
        }
    }
}
