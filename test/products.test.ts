import { Paystack } from '../src/index'

const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const paystack = new Paystack({ secretKey })

describe('Paystack Products Unit Tests', () => {
  it('Should list all products', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    expect(true).toBeTruthy()
    await paystack.products.listProducts()
  })
})
