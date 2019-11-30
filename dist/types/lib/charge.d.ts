import { ICharge, ChargeParams, ChargeResponse } from '../../typings';
export declare class Charge implements ICharge {
    options: Object;
    constructor(options?: {});
    charge(context: ChargeParams): Promise<ChargeResponse>;
}
