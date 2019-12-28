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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Transactions = /** @class */ (function (_super) {
    __extends(Transactions, _super);
    function Transactions(options) {
        var _this = this;
        var host = options.host, axios = options.axios;
        _this = _super.call(this, options) || this;
        _this.options = options;
        _this.url = host + "/transaction";
        _this.axios = axios;
        return _this;
    }
    Transactions.prototype.initializeTransaction = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, axios, url, path, requiredFields;
            return __generator(this, function (_b) {
                try {
                    _a = this, axios = _a.axios, url = _a.url;
                    path = '/initialize/';
                    requiredFields = ['amount', 'email'];
                    this.validateContext(requiredFields, context);
                    return [2 /*return*/, axios.post(url + path, context).then(function (res) { return res.data; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.verifyTransaction = function (ref) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, axios, url, docs, path;
            return __generator(this, function (_b) {
                try {
                    _a = this, axios = _a.axios, url = _a.url;
                    if (!ref) {
                        docs = 'https://developers.paystack.co/reference#verify-transaction';
                        throw new Error("Missing Parameter 'reference' is required for this method. " + docs);
                    }
                    path = "/verify/" + ref;
                    return [2 /*return*/, axios.get(url + path).then(function (res) { return res.data; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.listTransactions = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, axios, url, query;
            return __generator(this, function (_b) {
                try {
                    _a = this, axios = _a.axios, url = _a.url;
                    query = this.buildQueryParams(context || {});
                    return [2 /*return*/, axios.get(url + query).then(function (res) { return res.data; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.fetchTransaction = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, axios, url, docs;
            return __generator(this, function (_b) {
                try {
                    _a = this, axios = _a.axios, url = _a.url;
                    if (!transactionId) {
                        docs = 'https://developers.paystack.co/reference#fetch-transaction';
                        throw new Error("Missing Parameter 'transactionId' is required for this method. " + docs);
                    }
                    return [2 /*return*/, axios.get(url + "/" + transactionId).then(function (res) { return res.data; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.chargeAuthorization = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, axios, url, path, requiredFields;
            return __generator(this, function (_b) {
                try {
                    _a = this, axios = _a.axios, url = _a.url;
                    path = '/charge_authorization/';
                    requiredFields = ['amount', 'email', 'authorization_code'];
                    this.validateContext(requiredFields, context);
                    return [2 /*return*/, axios.post(url + path, context).then(function (res) { return res.data; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.viewTransactionTimeline = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, axios, url, docs;
            return __generator(this, function (_b) {
                try {
                    _a = this, axios = _a.axios, url = _a.url;
                    if (!transactionId) {
                        docs = 'https://developers.paystack.co/reference#view-transaction-timeline';
                        throw new Error("Missing Parameter 'transactionId' is required for this method. " + docs);
                    }
                    return [2 /*return*/, axios.get(url + "/timeline/" + transactionId).then(function (res) { return res.data; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.transactionTotals = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, new Promise(function () { return null; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.exportTransactions = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, new Promise(function () { return null; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.requestReauthorization = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, new Promise(function () { return null; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    Transactions.prototype.checkAuthorization = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, new Promise(function () { return null; })];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    return Transactions;
}(util_1.Util));
exports.Transactions = Transactions;
//# sourceMappingURL=transactions.js.map