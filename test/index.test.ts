import Paystack from '../src/index'
import * as axios from 'axios'

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
// @ts-ignore
axios.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`
const options = { secretKey, axios: axios, host: 'https://api.paystack.co' }

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


