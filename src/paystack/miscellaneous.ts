import { IMiscellaneous, Options, Country, Bank } from '../../typings'
import { AxiosResponse } from 'axios'

/**
 * @constructor Miscellaneous
 * Provides miscellaneous REST API endpoints for paystack customers
 * @docs - https://developers.paystack.co/reference#list-banks
 */
export class Miscellaneous implements IMiscellaneous {
    options: Options
    url: string
    axios: any

    constructor(options: Options) {
        const { host, axios } = options
        this.options = options
        this.url = host || ''
        this.axios = axios
    }

    /**
     * @returns {Promise<Array<Country>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-countries
     */
    async listCountries(): Promise<Array<Country>> {
        try {
            const { axios, url } = this
            return axios.get(`${url}/country`).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @returns {Promise<Array<Country>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-banks
     */
    async listBanks(): Promise<Array<Bank>> {
        try {
            const { axios, url } = this
            return axios.get(`${url}/bank`).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }
}