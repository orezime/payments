export type Options = {
    secretKey: string
    axios: any,
    host: string
}

export type Bank = {
    name: string
    slug: string
    code: string
    longcode: string
    gateway: string
    pay_with_bank: boolean
    active: boolean
    is_deleted: any
    country: string
    currency: string
    type: string
    id: number
    createdAt: Date
    updatedAt: Date
}

export type Relationship = {
    type: string,
    data: Array<string>
}

export type Country = {
    id: number,
    name: string,
    iso_code: string,
    integration_defaults: Object,
    relationships: {
        currency: Relationship,
        integration_feature: Relationship,
        payment_method: Relationship
    }
}

export type Customer = {
    email: string,
    integration: number,
    domain: string,
    customer_code: string,
    id: number,
    createdAt: Date,
    updatedAt: Date
}

export type CustomerParams = {
    email: string
    first_name: string
    last_name: string
    phone: string
    metadata?: any
}

export type Response = {
    status: boolean
    message: string
}

export type FlagResponse = CustomerParams & {
    domain: string,
    customer_code: string,
    risk_action: string,
    id: number,
    integration: number,
    createdAt: Date,
    updatedAt: Date
}

export type FlagParams = {
    customer: string
    risk_action: string
}

export interface ICustomers {
    listCustomers(): Promise<Array<Customer>>
    createCustomers(context: CustomerParams): Promise<Customer>
    /** customer can be fetched by id email or customer code **/
    fetchCustomer(context: string): Promise<Customer>
    updateCustomer(context: CustomerParams): Promise<Customer>
    /** Authorization code **/
    deActivateAuthorization(context: string): Promise<Response>
    /** Whitelist / Blacklist Customer **/
    flagCustomer(context: FlagParams): Promise<FlagResponse>
}

export type ChargeParams = {
    email: string
    amount: number
    bank?: {
        code: string
        account_number: string
    }
    authorization_code: string
    pin: string
    metadata: any
    reference: string
    device_id: string
    birthday?: string
}

export type ChargeResponse = {
    reference: string,
    status: string,
    display_text: string
}

export interface ICharge {
    charge(context: ChargeParams): Promise<ChargeResponse>
}

export interface IRefunds { }

export interface IVerificarion { }

export interface IBanks {
    listBanks(): Promise<Array<Bank>>
}

export interface ICountries {
    listCountries(): Promise<Array<Country>>
}

export interface IMiscellaneous extends IBanks, ICountries {}