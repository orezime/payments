import axios from 'axios'
import { Miscellaneous, Transactions, Products } from './paystack'
import { Options, IMiscellaneous, ITransactions, IProduct } from '../typings'

export class Paystack {
  options: Options
  secretKey: string
  miscellaneous: IMiscellaneous
  transactions: ITransactions
  products: IProduct

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
    this.products = new Products(this.options)
  }

  _axios(secretKey: string): any {
    axios.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`
    return axios
  }
}
