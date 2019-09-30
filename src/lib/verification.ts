import { IVerificarion } from '../../typings'

export class Verification implements IVerificarion {
  options: Object

  constructor(options = {}) {
    this.options = options
  }
}
