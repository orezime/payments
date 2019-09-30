import Payments from '../src/index'

/**
 * Payments test
 */
const options = { secretKey: 'trf45436dftw3333', axios: {} }

describe('Payments test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('PaymentsClass is instantiable', () => {
    expect(new Payments(options)).toBeInstanceOf(Payments)
  })
})

console.log(new Payments(options))
