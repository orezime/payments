(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.index = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var Charge = /** @class */ (function () {
        function Charge(options) {
            if (options === void 0) { options = {}; }
            this.options = options;
        }
        return Charge;
    }());

    var Customers = /** @class */ (function () {
        function Customers(options) {
            if (options === void 0) { options = {}; }
            this.options = options;
        }
        return Customers;
    }());

    var Refunds = /** @class */ (function () {
        function Refunds(options) {
            if (options === void 0) { options = {}; }
            this.options = options;
        }
        return Refunds;
    }());

    var Verification = /** @class */ (function () {
        function Verification(options) {
            if (options === void 0) { options = {}; }
            this.options = options;
        }
        return Verification;
    }());

    var Payments = /** @class */ (function () {
        function Payments(options) {
            this.options = __assign(__assign({}, options), { axios: this._axios() });
            this.charge = new Charge(this.options);
            this.customers = new Customers(this.options);
            this.refunds = new Refunds(this.options);
            this.verification = new Verification(this.options);
        }
        Payments.prototype._axios = function () { };
        return Payments;
    }());

    return Payments;

})));
//# sourceMappingURL=orezime-paystack.umd.js.map
