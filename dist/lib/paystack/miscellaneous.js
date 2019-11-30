"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Miscellaneous {
    constructor(options) {
        this.options = options;
    }
    /**
    |--------------------------------------------------
    | List all available countries paystack supports
    |--------------------------------------------------
    */
    listCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${this.options.host}/country`;
                return axios_1.default.get(url).then(res => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
    |--------------------------------------------------
    | List all available banks in nigeria that paystack supports
    |--------------------------------------------------
    */
    listBanks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${this.options.host}/bank`;
                return axios_1.default.get(url).then(res => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.Miscellaneous = Miscellaneous;
//# sourceMappingURL=miscellaneous.js.map