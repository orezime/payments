import { ICustomers, Customer, CustomerParams, FlagParams, FlagResponse, Response } from '../../typings'

export class Customers implements ICustomers {
  options: Object

  constructor(options = {}) {
    this.options = options
  }

  listCustomers(): Promise<Array<Customer>> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }

  createCustomers(context: CustomerParams): Promise<Customer> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }

  /** customer can be fetched by id email or customer code **/
  fetchCustomer(context: string): Promise<Customer> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }

  updateCustomer(context: CustomerParams): Promise<Customer> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }

  /** Authorization code **/
  deActivateAuthorization(context: string): Promise<Response> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }

  /** Whitelist / Blacklist Customer **/
  flagCustomer(context: FlagParams): Promise<FlagResponse> {
    try {
      return new Promise((resolve, reject) => { })
    } catch (err) {
      throw err
    }
  }


}
