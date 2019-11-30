import { Options, ICharge, ICustomers, IRefunds, IVerificarion, IMiscellaneous } from '../typings';
declare class Paystack {
    options: Options;
    secretKey: string;
    charge: ICharge;
    customers: ICustomers;
    refunds: IRefunds;
    verification: IVerificarion;
    miscellaneous: IMiscellaneous;
    constructor(options: Options);
    _axios(): any;
}
export default Paystack;
