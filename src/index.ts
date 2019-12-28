// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import * as axios from 'axios'
import { Charge, Customers, Refunds, Verification, Miscellaneous, Transactions } from './paystack'
import { Options, ICharge, ICustomers, IRefunds, IVerificarion, IMiscellaneous, ITransactions } from '../typings'

export class Paystack {
  options: Options
  secretKey: string
  charge: ICharge
  customers: ICustomers
  refunds: IRefunds
  verification: IVerificarion
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
    this.charge = new Charge(this.options)
    this.customers = new Customers(this.options)
    this.refunds = new Refunds(this.options)
    this.verification = new Verification(this.options)
    this.miscellaneous = new Miscellaneous(this.options)
    this.transactions = new Transactions(this.options)
  }

  _axios(secretKey: string): any {
    // @ts-ignore
    axios.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`
    return axios
  }
}
