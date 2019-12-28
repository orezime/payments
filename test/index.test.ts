import { Paystack } from '../src/index'

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const paystack = new Paystack({ secretKey })

describe('Paystack test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('PaystackClass is instantiable', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.miscellaneous.listBanks()
  })

  it('PaystackClass is instantiable', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.miscellaneous.listCountries()
  })

  it('PaystackClass is instantiable', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    const ctx = await paystack.transactions.listTransactions()
    // console.log(ctx)
  })
})


