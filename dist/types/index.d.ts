import { Options, ICharge, ICustomers, IRefunds, IVerificarion } from '../typings';
declare class Payments {
    options: Options;
    charge: ICharge;
    customers: ICustomers;
    refunds: IRefunds;
    verification: IVerificarion;
    constructor(options: Options);
    _axios(): any;
}
export default Payments;
