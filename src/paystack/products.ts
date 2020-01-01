import { Options, IProduct, Product, ProductResponse, ListProductsResponse } from '../../typings'
import { Util } from './util'
import { AxiosResponse } from 'axios'

/**
 * @constructor Products
 * Interfaces with paystack REST API to perform CRUD operations on paystack products
 * @docs - https://developers.paystack.co/reference#create-product
 *
 */
export class Products extends Util implements IProduct {
    options: Options
    url: string
    axios: any

    constructor(options: Options) {
        const { host, axios } = options
        super(options)
        this.options = options
        this.url = `${host}/product`
        this.axios = axios
    }

    /**
     * @param {Product} - Product
     * @returns {Promise<ProductResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#create-product
     */
    createProduct(context: Product): Promise<ProductResponse> {
        try {
            const { axios, url } = this
            const path: string = '/'
            const requiredFields: Array<string> = ['name', 'description', 'price', 'currency']
            this.validateContext(requiredFields, context)
            return axios.post(url + path, context).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @returns {Promise<ListProductsResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-products
     */
    listProducts(): Promise<Array<ListProductsResponse>> {
        try {
            const { axios, url } = this
            const path: string = '/'
            return axios.get(url + path).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {Number} - Product Id
     * @returns {Promise<ProductResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#fetch-product
     */
    fetchProduct(productId: number): Promise<ProductResponse> {
        try {
            const { axios, url } = this
            if (!productId) {
                const docs: string = 'https://developers.paystack.co/reference#fetch-product'
                throw new Error(`Missing Parameter 'productId' is required for this method. ${docs}`)
            }
            const path: string = `/${productId}`
            return axios.get(url + path).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }

    /**
     * @param {Product} - Product
     * @returns {Promise<ProductResponse>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#update-product
     */
    updateProduct(productId: number, context: Product): Promise<ProductResponse> {
        try {
            const { axios, url } = this
            if (!productId) {
                const docs: string = 'https://developers.paystack.co/reference#update-product'
                throw new Error(`Missing Parameter 'productId' is required for this method. ${docs}`)
            }
            const path: string = `/${productId}`
            const requiredFields: Array<string> = ['name', 'description', 'price', 'currency']
            this.validateContext(requiredFields, context)
            return axios.put(url + path, { ...context, id: productId }).then((res: AxiosResponse) => res.data)
        } catch (err) {
            throw err
        }
    }
}
