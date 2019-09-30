"use strict";
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var applyMixins = function (derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            // @ts-ignore
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
};
var Payments = /** @class */ (function () {
    function Payments(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
    }
    return Payments;
}());
exports.default = applyMixins(Payments, [lib_1.Charge, lib_1.Customers, lib_1.Refunds, lib_1.Verification]);
//# sourceMappingURL=index.js.map