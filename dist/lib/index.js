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
var axios_1 = require("axios");
var paystack_1 = require("./paystack");
var Paystack = /** @class */ (function () {
    function Paystack(options) {
        var secretKey = options.secretKey;
        this.options = __assign(__assign({}, options), { axios: this._axios(secretKey), host: 'https://api.paystack.co' });
        this.secretKey = secretKey;
        this.miscellaneous = new paystack_1.Miscellaneous(this.options);
        this.transactions = new paystack_1.Transactions(this.options);
    }
    Paystack.prototype._axios = function (secretKey) {
        axios_1.default.defaults.headers.common['Authorization'] = "Bearer " + secretKey;
        return axios_1.default;
    };
    return Paystack;
}());
exports.Paystack = Paystack;
//# sourceMappingURL=index.js.map