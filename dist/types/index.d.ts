import { Options, ICharge, ICustomers, IRefunds, IVerificarion, IMiscellaneous, ITransactions } from '../typings';
export declare class Paystack {
    options: Options;
    secretKey: string;
    charge: ICharge;
    customers: ICustomers;
    refunds: IRefunds;
    verification: IVerificarion;
    miscellaneous: IMiscellaneous;
    transactions: ITransactions;
    constructor(options: Options);
    _axios(secretKey: string): any;
}
