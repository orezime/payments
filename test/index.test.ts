import { Paystack } from '../src/index'

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const paystack = new Paystack({ secretKey })

describe('Paystack Transaction Tests', () => {
  it('Mock Test', () => {
    expect(paystack).toBeInstanceOf(Paystack)
    expect(true).toBeTruthy()
  })

  it('Should list all banks', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.miscellaneous.listBanks()
  })

  it('Should list all countries', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.miscellaneous.listCountries()
  })

  it('Should list all past transactions', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.transactions.listTransactions()
  })

  it('Should list all past transaction totals', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.transactions.transactionTotals({ from: '25/06/2019', to: '25/12/2019' })
    await paystack.transactions.transactionTotals()
  })

  it('Should list all previously exported transactions', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.transactions.exportTransactions()
  })

  it('Should request reauthorization', async () => {
    expect(paystack).toBeInstanceOf(Paystack)
    await paystack.transactions.exportTransactions()
  })
})


