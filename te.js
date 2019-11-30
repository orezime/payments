const { Paystack } = require('./dist/lib')

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'
const options = { secretKey }

const paystack = new Paystack(options)
paystack.miscellaneous.listBanks().then(ctx => console.log(ctx))


