import { Options, IMiscellaneous, ITransactions } from '../typings';
export declare class Paystack {
    options: Options;
    secretKey: string;
    miscellaneous: IMiscellaneous;
    transactions: ITransactions;
    constructor(options: Options);
    _axios(secretKey: string): any;
}
