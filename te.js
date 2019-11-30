const Paystack = require('./dist/lib')
const axios = require('axios')

/**
 * Paystack test
 */
const secretKey = 'sk_test_a30790508551ae7a406856bd6f2fa49789255454'

// @ts-ignore
axios.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`
const options = { secretKey, axios: axios, host: 'https://api.paystack.co' }

const paystack = new Paystack(options)
paystack.miscellaneous.listBanks().then(console.log(ctx))


