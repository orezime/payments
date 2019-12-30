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
const util_1 = require("./util");
/**
 * @constructor Transactions
 * Interfaces with paystack REST API to handle payment and user transactions
 * @docs - https://developers.paystack.co/reference#initialize-a-transaction
 *
 */
class Transactions extends util_1.Util {
    constructor(options) {
        const { host, axios } = options;
        super(options);
        this.options = options;
        this.url = `${host}/transaction`;
        this.axios = axios;
    }
    /**
     * @param {TransactionParams} - TransactionParams
     * @returns {Promise<TransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#initialize-a-transaction
     */
    initializeTransaction(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const path = '/initialize/';
                const requiredFields = ['amount', 'email'];
                this.validateContext(requiredFields, context);
                return axios.post(url + path, context).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {string} - reference
     * @returns {Promise<VerifyTransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#verify-transaction
     */
    verifyTransaction(ref) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                if (!ref) {
                    const docs = 'https://developers.paystack.co/reference#verify-transaction';
                    throw new Error(`Missing Parameter 'reference' is required for this method. ${docs}`);
                }
                const path = `/verify/${ref}`;
                return axios.get(url + path).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {ListTransactionsParams} - ListTransactionsParams
     * @returns {Promise<Array<Transaction>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-transactions
     */
    listTransactions(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const query = this.buildQueryParams(context || {});
                return axios.get(url + query).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {number} - transactionId
     * @returns {Promise<Transaction>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#fetch-transaction
     */
    fetchTransaction(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                if (!transactionId) {
                    const docs = 'https://developers.paystack.co/reference#fetch-transaction';
                    throw new Error(`Missing Parameter 'transactionId' is required for this method. ${docs}`);
                }
                return axios.get(`${url}/${transactionId}`).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {Transaction} - Transaction
     * @returns {Promise<VerifyTransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#charge-authorization
     */
    chargeAuthorization(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const path = '/charge_authorization/';
                const requiredFields = ['amount', 'email', 'authorization_code'];
                this.validateContext(requiredFields, context);
                return axios.post(url + path, context).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {number} - transactionId
     * @returns {Promise<Log>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#view-transaction-timeline
     */
    viewTransactionTimeline(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                if (!transactionId) {
                    const docs = 'https://developers.paystack.co/reference#view-transaction-timeline';
                    throw new Error(`Missing Parameter 'transactionId' is required for this method. ${docs}`);
                }
                return axios.get(`${url}/timeline/${transactionId}`).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {Timeline} - Timeline
     * @returns {Promise<Total>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#transaction-totals
     */
    transactionTotals(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const query = this.buildQueryParams(context || {});
                return axios.get(`${url}/totals${query}`).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {exportParams} - exportParams
     * @returns {Promise<exportResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#export-transactions
     */
    exportTransactions(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const query = this.buildQueryParams(context || {});
                return axios.get(`${url}/export${query}`).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {ChargeParams} - ChargeParams
     * @returns {Promise<reAuthorizationResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#request-reauthorization
     */
    requestReauthorization(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const path = '/request_reauthorization/';
                const requiredFields = ['amount', 'email', 'authorization_code'];
                this.validateContext(requiredFields, context);
                return axios.post(url + path, context).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * @param {ChargeParams} - ChargeParams
     * @returns {Promise<checkAuthResponse>}
     * @throws - throws error if something goes wrong
     * @params - https://developers.paystack.co/reference#check-authorization
     */
    checkAuthorization(context) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { axios, url } = this;
                const path = '/check_authorization/';
                const requiredFields = ['amount', 'email', 'authorization_code'];
                this.validateContext(requiredFields, context);
                return axios.post(url + path, context).then((res) => res.data);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.Transactions = Transactions;
//# sourceMappingURL=transactions.js.map