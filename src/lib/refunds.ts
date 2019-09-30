import { IRefunds } from '../../typings'

export class Refunds implements IRefunds {
  options: Object

  constructor(options = {}) {
    this.options = options
  }
}
