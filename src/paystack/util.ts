import { Options, IUtil } from '../../typings'

/**
 * @constructor Transactions
 * Provides helper methods and error handling for the whole package
 * 
 */
export class Util implements IUtil {
    options: Options

    constructor(options: Options) {
        this.options = options
    }

    /**
     * @param {Array<string>} - requiredFields
     * @param {Object} - context
     * @returns {void} 
     * @throws - throws error if something goes wrong
     * cross checks the required field with context to make sure all fields required are fulfiled
     */
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

    /**
     * @param {Object} - context
     * @returns {void} 
     * @throws - throws error if something goes wrong
     * Builds a query param from a object
     * { name: 'john', place: 'here' } -> ?name=john&place=here
     */
    buildQueryParams(context: any): string {
        try {
            let query = '', keys = Object.keys(context)
            if (keys.length <= 0) return query
            for (let key in context) {
                query += `${key}=${context[key]}&`
            }
            return `?${query.slice(0, -1)}`
        } catch (err) {
            throw err
        }
    }
}
