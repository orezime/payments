// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { Charge, Customers, Refunds, Verification } from './lib'
import { Options } from '../typings'

class Payments {
  options: Options
  secretKey: string

  constructor(options: Options) {
    this.options = options
    this.secretKey = options.secretKey
  }
}

export default Payments
