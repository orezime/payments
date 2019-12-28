import { Options, IProduct, Product, ProductResponse, ListProductsResponse } from '../../typings'
import { Util } from './util'

export class Products extends Util implements IProduct {
    options: Options

    constructor(options: Options) {
        super(options)
        this.options = options
    }

    createProduct(context: Product): Promise<ProductResponse> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    listProducts(): Promise<Array<ListProductsResponse>> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    fetchProduct(productId: number): Promise<Array<ProductResponse>> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }

    updateProduct(context: Product): Promise<Array<ProductResponse>> {
        try {
            return new Promise(() => null)
        } catch (err) {
            throw err
        }
    }
}
