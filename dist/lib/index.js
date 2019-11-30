"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
var axios = require("axios");
var paystack_1 = require("./paystack");
var Paystack = /** @class */ (function () {
    function Paystack(options) {
        this.options = __assign(__assign({}, options), { axios: this._axios(), host: 'https://api.paystack.co' });
        this.secretKey = options.secretKey;
        this.charge = new paystack_1.Charge(this.options);
        this.customers = new paystack_1.Customers(this.options);
        this.refunds = new paystack_1.Refunds(this.options);
        this.verification = new paystack_1.Verification(this.options);
        this.miscellaneous = new paystack_1.Miscellaneous(this.options);
    }
    Paystack.prototype._axios = function () {
        // @ts-ignore
        axios.defaults.headers.common['Authorization'] = "Bearer " + this.secretKey;
        return axios;
    };
    return Paystack;
}());
exports.Paystack = Paystack;
//# sourceMappingURL=index.js.map