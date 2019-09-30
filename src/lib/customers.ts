import { ICustomers } from '../../typings'

export class Customers implements ICustomers {
  options: Object

  constructor(options = {}) {
    this.options = options
  }
}
