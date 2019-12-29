import { Options, IProduct, Product, ProductResponse, ListProductsResponse } from '../../typings';
import { Util } from './util';
export declare class Products extends Util implements IProduct {
    options: Options;
    constructor(options: Options);
    createProduct(context: Product): Promise<ProductResponse>;
    listProducts(): Promise<Array<ListProductsResponse>>;
    fetchProduct(productId: number): Promise<Array<ProductResponse>>;
    updateProduct(context: Product): Promise<Array<ProductResponse>>;
}
