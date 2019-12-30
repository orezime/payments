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
/**
 * @constructor Miscellaneous
 * Provides miscellaneous REST API endpoints for paystack customers
 * @docs - https://developers.paystack.co/reference#list-banks
 */
class Miscellaneous {
    constructor(options) {
        const { host, axios } = options;
        this.options = options;
        this.url = host || '';
        this.axios = axios;
    }
    /**
     * @returns {Promise<Array<Country>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-countries
     */
    listCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                return axios.get(`${url}/country`).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @returns {Promise<Array<Country>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-banks
     */
    listBanks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                return axios.get(`${url}/bank`).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.Miscellaneous = Miscellaneous;
//# sourceMappingURL=miscellaneous.js.map