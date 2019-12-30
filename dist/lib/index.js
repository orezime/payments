"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const paystack_1 = require("./paystack");
class Paystack {
    constructor(options) {
        const secretKey = options.secretKey;
        this.options = Object.assign(Object.assign({}, options), { axios: this._axios(secretKey), host: 'https://api.paystack.co' });
        this.secretKey = secretKey;
        this.miscellaneous = new paystack_1.Miscellaneous(this.options);
        this.transactions = new paystack_1.Transactions(this.options);
    }
    _axios(secretKey) {
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${secretKey}`;
        return axios_1.default;
    }
}
exports.Paystack = Paystack;
//# sourceMappingURL=index.js.map