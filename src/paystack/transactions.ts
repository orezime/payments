import {
    Options,
    ITransactions,
    TransactionParams,
    TransactionResponse,
    VerifyTransactionResponse,
    ListTransactionsParams,
    Transaction,
    Log,
    Timeline,
    Total,
    ChargeParams,
    exportParams,
    exportResponse,
    reAuthorizationResponse,
    checkAuthResponse
} from '../../typings'
import { Util } from './util'
import { AxiosResponse } from 'axios'

/**
 * @constructor Transactions
 * Interfaces with paystack REST API to handle payment and user transactions
 * @docs - https://developers.paystack.co/reference#initialize-a-transaction
 * 
 */
export class Transactions extends Util implements ITransactions {
    options: Options
    url: string
    axios: any

    constructor(options: Options) {
        const { host, axios } = options
        super(options)
        this.options = options
        this.url = `${host}/transaction`
        this.axios = axios
    }

    /**
     * @param {TransactionParams} - TransactionParams
     * @returns {Promise<TransactionResponse>} 
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#initialize-a-transaction
     */
    async initializeTransaction(context: TransactionParams): Promise<TransactionResponse> {
        try {
            const { axios, url } = this
            const path: string = '/initialize/'
            const requiredFields: Array<string> = ['amount', 'email']
            this.validateContext(requiredFields, context)
            return axios.post(url + path, context).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {string} - reference
     * @returns {Promise<VerifyTransactionResponse>} 
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#verify-transaction
     */
    async verifyTransaction(ref: string): Promise<VerifyTransactionResponse> {
        try {
            const { axios, url } = this
            if (!ref) {
                const docs: string = 'https://developers.paystack.co/reference#verify-transaction'
                throw new Error(`Missing Parameter 'reference' is required for this method. ${docs}`)
            }
            const path: string = `/verify/${ref}`
            return axios.get(url + path).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {ListTransactionsParams} - ListTransactionsParams
     * @returns {Promise<Array<Transaction>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-transactions
     */
    async listTransactions(context?: ListTransactionsParams): Promise<Array<Transaction>> {
        try {
            const { axios, url } = this
            const query: string = this.buildQueryParams(context || {})
            return axios.get(url + query).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {number} - transactionId
     * @returns {Promise<Transaction>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#fetch-transaction
     */
    async fetchTransaction(transactionId: number): Promise<Transaction> {
        try {
            const { axios, url } = this
            if (!transactionId) {
                const docs: string = 'https://developers.paystack.co/reference#fetch-transaction'
                throw new Error(`Missing Parameter 'transactionId' is required for this method. ${docs}`)
            }
            return axios.get(`${url}/${transactionId}`).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {Transaction} - Transaction
     * @returns {Promise<VerifyTransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#charge-authorization
     */
    async chargeAuthorization(context: Transaction): Promise<VerifyTransactionResponse> {
        try {
            const { axios, url } = this
            const path: string = '/charge_authorization/'
            const requiredFields: Array<string> = ['amount', 'email', 'authorization_code']
            this.validateContext(requiredFields, context)
            return axios.post(url + path, context).then((res: AxiosResponse) => res.data)

        } catch (err) {
            throw err
        }
    }

    /**
     * @param {number} - transactionId
     * @returns {Promise<Log>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#view-transaction-timeline
     */
    async viewTransactionTimeline(transactionId: number): Promise<Log> {
        try {
            const { axios, url } = this
            if (!transactionId) {
                const docs: string = 'https://developers.paystack.co/reference#view-transaction-timeline'
                throw new Error(`Missing Parameter 'transactionId' is required for this method. ${docs}`)
            }
            return axios.get(`${url}/timeline/${transactionId}`).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {Timeline} - Timeline
     * @returns {Promise<Total>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#transaction-totals
     */
    async transactionTotals(context?: Timeline): Promise<Total> {
        try {
            const { axios, url } = this
            const query: string = this.buildQueryParams(context || {})
            return axios.get(`${url}/totals${query}`).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {exportParams} - exportParams
     * @returns {Promise<exportResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#export-transactions
     */
    async exportTransactions(context?: exportParams): Promise<exportResponse> {
        try {
            const { axios, url } = this
            const query: string = this.buildQueryParams(context || {})
            return axios.get(`${url}/export${query}`).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {ChargeParams} - ChargeParams
     * @returns {Promise<reAuthorizationResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#request-reauthorization
     */
    async requestReauthorization(context: ChargeParams): Promise<reAuthorizationResponse> {
        try {
            const { axios, url } = this
            const path: string = '/request_reauthorization/'
            const requiredFields: Array<string> = ['amount', 'email', 'authorization_code']
            this.validateContext(requiredFields, context)
            return axios.post(url + path, context).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {ChargeParams} - ChargeParams
     * @returns {Promise<checkAuthResponse>}
     * @throws - throws error if something goes wrong
     * @params - https://developers.paystack.co/reference#check-authorization
     */
    async checkAuthorization(context: ChargeParams): Promise<checkAuthResponse> {
        try {
            const { axios, url } = this
            const path: string = '/check_authorization/'
            const requiredFields: Array<string> = ['amount', 'email', 'authorization_code']
            this.validateContext(requiredFields, context)
            return axios.post(url + path, context).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }
}
