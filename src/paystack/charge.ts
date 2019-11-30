import { ICharge, ChargeParams, ChargeResponse } from '../../typings'

export class Charge implements ICharge {
  options: Object

  constructor(options = {}) {
    this.options = options
  }

  charge(context: ChargeParams): Promise<ChargeResponse> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }

}
