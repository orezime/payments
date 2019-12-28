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
        this.url = `${host}/transaction/`
        this.axios = axios
    }

    initializeTransaction(context: TransactionParams): Promise<TransactionResponse> {
        try {
            const { axios, url } = this
            const path = 'initialize/'
            const requiredFields = ['amount', 'email']
            this.validateContext(requiredFields, context)
            return axios.post(url + path, context).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    verifyTransaction(ref: string): Promise<VerifyTransactionResponse> {
        try {
            const { axios, url } = this
            if (!ref) {
                const docs = 'https://developers.paystack.co/reference#verify-transaction'
                throw new Error(`Missing Parameter 'reference' is required for this method. ${docs}`)
            }
            const path = `verify/${ref}`
            return axios.get(url + path).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    listTransactions(context: ListTransactionsParams): Promise<Array<Transaction>> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    fetchTransaction(transactionId: number): Promise<Transaction> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    chargeAuthorization(context: Transaction): Promise<VerifyTransactionResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    viewTransactionTimeline(transactionId: number): Promise<Log> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    transactionTotals(context: Timeline): Promise<Total> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    exportTransactions(context: exportParams): Promise<exportResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    requestReauthorization(context: ChargeParams): Promise<reAuthorizationResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    checkAuthorization(context: ChargeParams): Promise<checkAuthResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }
}
