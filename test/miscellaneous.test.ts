import { Paystack } from '../src/index'

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const paystack = new Paystack({ secretKey })

describe('Paystack Miscellaneous Unit Tests', () => {
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
})


