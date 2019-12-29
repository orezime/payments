"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Products = /** @class */ (function (_super) {
    __extends(Products, _super);
    function Products(options) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        return _this;
    }
    Products.prototype.createProduct = function (context) {
        try {
            return new Promise(function () { return null; });
        }
        catch (err) {
            throw err;
        }
    };
    Products.prototype.listProducts = function () {
        try {
            return new Promise(function () { return null; });
        }
        catch (err) {
            throw err;
        }
    };
    Products.prototype.fetchProduct = function (productId) {
        try {
            return new Promise(function () { return null; });
        }
        catch (err) {
            throw err;
        }
    };
    Products.prototype.updateProduct = function (context) {
        try {
            return new Promise(function () { return null; });
        }
        catch (err) {
            throw err;
        }
    };
    return Products;
}(util_1.Util));
exports.Products = Products;
//# sourceMappingURL=products.js.map