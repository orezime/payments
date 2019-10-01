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

export interface ICharge {} 

export interface ICustomers{} 

export interface IRefunds {} 

export interface IVerificarion {}

export interface IBanks { 
    list(): Promise<Array<Bank>>
}