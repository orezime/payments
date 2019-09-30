(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.index = factory());
}(this, (function () { 'use strict';

  var Payments = /** @class */ (function () {
      function Payments(options) {
          this.options = options;
          this.secretKey = options.secretKey;
      }
      return Payments;
  }());
  //# sourceMappingURL=index.js.map

  return Payments;

})));
//# sourceMappingURL=orezime-paystack.umd.js.map
