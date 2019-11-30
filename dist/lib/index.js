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
var lib_1 = require("./lib");
var Paystack = /** @class */ (function () {
    function Paystack(options) {
        this.options = __assign(__assign({}, options), { axios: this._axios(), host: 'https://api.paystack.co' });
        this.secretKey = options.secretKey;
        this.charge = new lib_1.Charge(this.options);
        this.customers = new lib_1.Customers(this.options);
        this.refunds = new lib_1.Refunds(this.options);
        this.verification = new lib_1.Verification(this.options);
        this.miscellaneous = new lib_1.Miscellaneous(this.options);
    }
    Paystack.prototype._axios = function () {
        // @ts-ignore
        axios.defaults.headers.common['Authorization'] = "Bearer " + this.secretKey;
        return axios;
    };
    return Paystack;
}());
exports.default = Paystack;
//# sourceMappingURL=index.js.map