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

    async listTransactions(context?: ListTransactionsParams): Promise<Array<Transaction>> {
        try {
            const { axios, url } = this
            const query: string = this.buildQueryParams(context || {})
            return axios.get(url + query).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

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

    async transactionTotals(context: Timeline): Promise<Total> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    async exportTransactions(context: exportParams): Promise<exportResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    async requestReauthorization(context: ChargeParams): Promise<reAuthorizationResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    async checkAuthorization(context: ChargeParams): Promise<checkAuthResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }
}
