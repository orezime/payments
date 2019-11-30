import { ICustomers, Customer, CustomerParams, FlagParams, FlagResponse, Response } from '../../typings';
export declare class Customers implements ICustomers {
    options: Object;
    constructor(options?: {});
    listCustomers(): Promise<Array<Customer>>;
    createCustomers(context: CustomerParams): Promise<Customer>;
    /** customer can be fetched by id email or customer code **/
    fetchCustomer(context: string): Promise<Customer>;
    updateCustomer(context: CustomerParams): Promise<Customer>;
    /** Authorization code **/
    deActivateAuthorization(context: string): Promise<Response>;
    /** Whitelist / Blacklist Customer **/
    flagCustomer(context: FlagParams): Promise<FlagResponse>;
}
