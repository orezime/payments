// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import * as axios from 'axios'
import { Charge, Customers, Refunds, Verification, Miscellaneous } from './paystack'
import { Options, ICharge, ICustomers, IRefunds, IVerificarion, IMiscellaneous } from '../typings'

export class Paystack {
  options: Options
  secretKey: string
  charge: ICharge
  customers: ICustomers
  refunds: IRefunds
  verification: IVerificarion
  miscellaneous: IMiscellaneous

  constructor(options: Options) {
    this.options = {
      ...options,
      axios: this._axios(),
      host: 'https://api.paystack.co'
    }
    this.secretKey = options.secretKey
    this.charge = new Charge(this.options)
    this.customers = new Customers(this.options)
    this.refunds = new Refunds(this.options)
    this.verification = new Verification(this.options)
    this.miscellaneous = new Miscellaneous(this.options)
  }

  _axios(): any {
    // @ts-ignore
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.secretKey}`
    return axios
  }
}
