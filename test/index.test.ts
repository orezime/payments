import { Paystack } from '../src/index'

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const options = { secretKey }

describe('Paystack test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('PaystackClass is instantiable', async () => {
    const paystack = new Paystack(options)
    expect(paystack).toBeInstanceOf(Paystack)
    const ctx = await paystack.miscellaneous.listBanks()
    console.log(ctx)
  })

  it('PaystackClass is instantiable', async () => {
    const paystack = new Paystack(options)
    expect(paystack).toBeInstanceOf(Paystack)
    const ctx = await paystack.miscellaneous.listCountries()
    console.log(ctx)
  })
})


