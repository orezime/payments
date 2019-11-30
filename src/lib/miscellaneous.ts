import { IMiscellaneous, Options, Country, Bank } from '../../typings'
import axios from 'axios'

export class Miscellaneous implements IMiscellaneous {
    options: Options

    constructor(options: Options) {
        this.options = options
    }

    /**
    |--------------------------------------------------
    | List all available countries paystack supports
    |--------------------------------------------------
    */
    async listCountries(): Promise<Array<Country>> {
        try {
            const url = `${this.options.host}/country`
            return axios.get(url).then(res => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
    |--------------------------------------------------
    | List all available banks in nigeria that paystack supports
    |--------------------------------------------------
    */
    async listBanks(): Promise<Array<Bank>> {
        try {
            const url = `${this.options.host}/bank`
            return axios.get(url).then(res => res.data)
        } catch (err) {
            throw err
        }
    }
}