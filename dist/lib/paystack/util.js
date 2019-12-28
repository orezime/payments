"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util(options) {
        this.options = options;
    }
    Util.prototype.validateContext = function (requiredFields, context) {
        try {
            var keys_1 = Object.keys(context), found_1 = true;
            requiredFields.forEach(function (requiredField) {
                found_1 = found_1 && keys_1.includes(requiredField);
            });
            var docs = 'https://developers.paystack.co/reference', msg = "Missing field(s). The method your trying to call requires the following object fields " + requiredFields + " as params. " + docs;
            if (!found_1)
                throw new Error(msg + docs);
        }
        catch (err) {
            throw err;
        }
    };
    Util.prototype.buildQueryParams = function (context) {
        try {
            var query = '', keys = Object.keys(context);
            if (keys.length <= 0)
                return query;
            for (var key in context) {
                query += key + "=" + context[key] + "&";
            }
            return "?" + query.slice(0, -1);
        }
        catch (err) {
            throw err;
        }
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map