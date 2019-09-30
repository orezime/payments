import { ICharge } from '../../typings'

export class Charge implements ICharge {
  options: Object

  constructor(options = {}) {
    this.options = options
  }
}
