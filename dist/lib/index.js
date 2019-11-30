"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
const axios = require("axios");
const paystack_1 = require("./paystack");
class Paystack {
    constructor(options) {
        this.options = Object.assign(Object.assign({}, options), { axios: this._axios(), host: 'https://api.paystack.co' });
        this.secretKey = options.secretKey;
        this.charge = new paystack_1.Charge(this.options);
        this.customers = new paystack_1.Customers(this.options);
        this.refunds = new paystack_1.Refunds(this.options);
        this.verification = new paystack_1.Verification(this.options);
        this.miscellaneous = new paystack_1.Miscellaneous(this.options);
    }
    _axios() {
        // @ts-ignore
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.secretKey}`;
        return axios;
    }
}
exports.Paystack = Paystack;
//# sourceMappingURL=index.js.map