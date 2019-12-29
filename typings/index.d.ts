export type Options = {
    secretKey: string
    axios?: any
    host?: string
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
    type: string
    data: Array<string>
}

export type Country = {
    id: number
    name: string
    iso_code: string
    integration_defaults: Object
    relationships: {
        currency: Relationship
        integration_feature: Relationship
        payment_method: Relationship
    }
}

export type Customer = {
    email: string
    integration: number
    domain: string
    customer_code: string
    id: number
    createdAt: Date
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
    domain: string
    customer_code: string
    risk_action: string
    id: number
    integration: number
    createdAt: Date
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
    pin?: string
    metadata: any
    currency?: string
    reference: string
    device_id?: string
    birthday?: string
}

export type ChargeResponse = {
    reference: string
    status: string
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

export interface IMiscellaneous extends IBanks, ICountries { }

export type Transaction = {
    callback_url?: string
    reference: string
    amount: string
    email: string
    plan: string
    invoice_limit: number
    metadata: Object
    subaccount: string
    transaction_charge: number
    bearer: string
    channels?: Array<string>
}

export type TransactionResponse = {
    status: true
    message: string
    data: {
        authorization_url: string
        access_code: string
        reference?: string
    }
}

export type TransactionParams = {
    reference?: string
    amount: number
    email: string
}

export type Authorization = {
    authorization_code: string
    card_type: string
    last4: number
    exp_month: number
    exp_year: number
    bin: number
    bank: string
    channel: string
    signature: string
    reusable: boolean
    country_code: string
}

export type History = {
    type: string
    message: string
    time: number
}

export type Log = {
    time_spent: number
    attempts: number
    authentication: string | null
    errors: number
    success: boolean
    mobile: boolean
    input: Array<any>
    channel: string | null
    history: Array<History>
}

export type VerifyTransactionResponse = {
    customer: Customer
    authorization: Authorization
    log: Log
    fees: number | null
    amount: number
    currency: string
    transaction_date: string
    status: string
    reference: string
    domain: string
    metadata: number
    gateway_response: string
    message: string | null
    channel: string
    ip_address: string
    plan: string
}

export type ListTransactionsParams = {
    perPage?: number
    page?: number
    customer?: number
    status?: string
    from?: string
    to?: string
    amount?: number
}

export type Timeline = {
    from: string
    to: string
}

export type CurrencyType = {
    currency: string
    amount: number
}

export type Total = {
    total_transactions: number
    unique_customers: number
    total_volume: number
    total_volume_by_currency: Array<CurrencyType>
    pending_transfers: number
    pending_transfers_by_currency: Array<CurrencyType>
}

export type exportParams = Transaction & {
    settled: boolean
    payment_page: number
    customer: number
    currency: string
    settlement: number
    amount: number
    status: string
}
export type exportResponse = Response & {
    data: {
        path: string
    }
}

export type reAuthorizationResponse = Response & {
    data: {
        reauthorization_url: string
        reference: string
    }
}

export type checkAuthResponse = Response & {
    data: CurrencyType
}

export type Product = {
    integration: number
    name: string
    description: string
    product_code?: string
    price: number
    currency: string
    quantity: number
    quantity_sold: any
    type: string
    image_path: string
    file_path: string
    is_shippable: boolean
    unlimited: boolean
    domain: string
    active: boolean
    features?: any
    in_stock?: boolean
    metadata: any
    id: number
    createdAt?: Date
    updatedAt?: Date
}

export type ProductResponse = Response & {
    data: Product
}

export type ListProductsResponse = Response & {
    data: Array<Product>
}

export interface IUtil {
    validateContext(requiredFields: Array<string>, context: any): void
    buildQueryParams(context: any): string
}

export interface ITransactions {
    initializeTransaction(context: TransactionParams): Promise<TransactionResponse>
    verifyTransaction(ref: string): Promise<VerifyTransactionResponse>
    listTransactions(context?: ListTransactionsParams): Promise<Array<Transaction>>
    fetchTransaction(transactionId: number): Promise<Transaction>
    chargeAuthorization(context: Transaction): Promise<VerifyTransactionResponse>
    viewTransactionTimeline(transactionId: number): Promise<Log>
    transactionTotals(context?: Timeline): Promise<Total>
    exportTransactions(context?: exportParams): Promise<exportResponse>
    requestReauthorization(context: ChargeParams): Promise<reAuthorizationResponse>
    checkAuthorization(context: ChargeParams): Promise<checkAuthResponse>
}

export interface IProduct {
    createProduct(context: Product): Promise<ProductResponse>
    listProducts(): Promise<Array<ListProductsResponse>>
    fetchProduct(productId: number): Promise<Array<ProductResponse>>
    updateProduct(context: Product): Promise<Array<ProductResponse>>
}