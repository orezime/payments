import Payments from '../src/index'

/**
 * Payments test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const options = { secretKey, axios: {}, host: 'https://api.paystack.co' }

describe('Payments test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('PaymentsClass is instantiable', () => {
    expect(new Payments(options)).toBeInstanceOf(Payments)
  })
})

console.log(new Payments(options))
