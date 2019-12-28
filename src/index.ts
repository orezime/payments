import * as axios from 'axios'
import { Miscellaneous, Transactions } from './paystack'
import { Options, IMiscellaneous, ITransactions } from '../typings'

export class Paystack {
  options: Options
  secretKey: string
  miscellaneous: IMiscellaneous
  transactions: ITransactions

  constructor(options: Options) {
    const secretKey = options.secretKey
    this.options = {
      ...options,
      axios: this._axios(secretKey),
      host: 'https://api.paystack.co'
    }
    this.secretKey = secretKey
    this.miscellaneous = new Miscellaneous(this.options)
    this.transactions = new Transactions(this.options)
  }

  _axios(secretKey: string): any {
    // @ts-ignore
    axios.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`
    return axios
  }
}
