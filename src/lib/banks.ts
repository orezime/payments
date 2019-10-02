import { IBanks, Bank, Options } from '../../typings'
import axios from 'axios'

export class Banks implements IBanks {
  options: Options

  constructor(options: Options) {
    this.options = options
  }

  /**
  |--------------------------------------------------
  | List all available banks in nigeria that paystack supports
  |--------------------------------------------------
  */
  async list(): Promise<Array<Bank>> {
    try {
      const url = `${this.options.host}/bank`
      return axios.get(url).then(res => res.data)
    } catch (err) {
      throw err
    }
  }
}
