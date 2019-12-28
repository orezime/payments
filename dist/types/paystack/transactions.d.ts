import { Options, ITransactions, TransactionParams, TransactionResponse, VerifyTransactionResponse, ListTransactionsParams, Transaction, Log, Timeline, Total, ChargeParams, exportParams, exportResponse, reAuthorizationResponse, checkAuthResponse } from '../../typings';
import { Util } from './util';
export declare class Transactions extends Util implements ITransactions {
    options: Options;
    url: string;
    axios: any;
    constructor(options: Options);
    initializeTransaction(context: TransactionParams): Promise<TransactionResponse>;
    verifyTransaction(ref: string): Promise<VerifyTransactionResponse>;
    listTransactions(context?: ListTransactionsParams): Promise<Array<Transaction>>;
    fetchTransaction(transactionId: number): Promise<Transaction>;
    chargeAuthorization(context: Transaction): Promise<VerifyTransactionResponse>;
    viewTransactionTimeline(transactionId: number): Promise<Log>;
    transactionTotals(context: Timeline): Promise<Total>;
    exportTransactions(context: exportParams): Promise<exportResponse>;
    requestReauthorization(context: ChargeParams): Promise<reAuthorizationResponse>;
    checkAuthorization(context: ChargeParams): Promise<checkAuthResponse>;
}
