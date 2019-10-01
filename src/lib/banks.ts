import { IBanks, Bank } from '../../typings'

export class Banks implements IBanks {
  options: Object

  constructor(options = {}) {
    this.options = options
  }

  async list(): Promise<Array<Bank>> {
    try {
      return new Promise((reject, resolve) => {})
    } catch (err) {
      throw err
    }
  }
}
