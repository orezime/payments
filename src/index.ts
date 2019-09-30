// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import * as axios from 'axios'
import { Charge, Customers, Refunds, Verification } from './lib'
import { Options, ICharge, ICustomers, IRefunds, IVerificarion } from '../typings'

class Payments {
  options: Options
  secretKey: string
  charge: ICharge
  customers: ICustomers
  refunds: IRefunds
  verification: IVerificarion

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
  }

  _axios(): any {
    // @ts-ignore
    axios.defaults.headers.common['Authorization'] = this.secretKey
    return axios
  }
}

export default Payments
