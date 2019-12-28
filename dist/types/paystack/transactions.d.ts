import { Options, ITransactions, TransactionParams, TransactionResponse, VerifyTransactionResponse, ListTransactionsParams, Transaction, Log, Timeline, Total, ChargeParams, exportParams, exportResponse, reAuthorizationResponse, checkAuthResponse } from '../../typings';
import { Util } from './util';
/**
 * @constructor Transactions
 * Interfaces with paystack REST API to handle payment and user transactions
 * @docs - https://developers.paystack.co/reference#initialize-a-transaction
 *
 */
export declare class Transactions extends Util implements ITransactions {
    options: Options;
    url: string;
    axios: any;
    constructor(options: Options);
    /**
     * @param {TransactionParams} - TransactionParams
     * @returns {Promise<TransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#initialize-a-transaction
     */
    initializeTransaction(context: TransactionParams): Promise<TransactionResponse>;
    /**
     * @param {string} - reference
     * @returns {Promise<VerifyTransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#verify-transaction
     */
    verifyTransaction(ref: string): Promise<VerifyTransactionResponse>;
    /**
     * @param {ListTransactionsParams} - ListTransactionsParams
     * @returns {Promise<Array<Transaction>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-transactions
     */
    listTransactions(context?: ListTransactionsParams): Promise<Array<Transaction>>;
    /**
     * @param {number} - transactionId
     * @returns {Promise<Transaction>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#fetch-transaction
     */
    fetchTransaction(transactionId: number): Promise<Transaction>;
    /**
     * @param {Transaction} - Transaction
     * @returns {Promise<VerifyTransactionResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#charge-authorization
     */
    chargeAuthorization(context: Transaction): Promise<VerifyTransactionResponse>;
    /**
     * @param {number} - transactionId
     * @returns {Promise<Log>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#view-transaction-timeline
     */
    viewTransactionTimeline(transactionId: number): Promise<Log>;
    /**
     * @param {Timeline} - Timeline
     * @returns {Promise<Total>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#transaction-totals
     */
    transactionTotals(context?: Timeline): Promise<Total>;
    /**
     * @param {exportParams} - exportParams
     * @returns {Promise<exportResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#export-transactions
     */
    exportTransactions(context?: exportParams): Promise<exportResponse>;
    /**
     * @param {ChargeParams} - ChargeParams
     * @returns {Promise<reAuthorizationResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#request-reauthorization
     */
    requestReauthorization(context: ChargeParams): Promise<reAuthorizationResponse>;
    /**
     * @param {ChargeParams} - ChargeParams
     * @returns {Promise<checkAuthResponse>}
     * @throws - throws error if something goes wrong
     * @params - https://developers.paystack.co/reference#check-authorization
     */
    checkAuthorization(context: ChargeParams): Promise<checkAuthResponse>;
}
