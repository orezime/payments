import { Options } from '../../typings';
/**
 * @constructor Transactions
 * Provides helper methods and error handling for the whole package
 *
 */
export declare class Util {
    options: Options;
    constructor(options: Options);
    /**
     * @param {Array<string>} - requiredFields
     * @param {Object} - context
     * @returns {void}
     * @throws - throws error if something goes wrong
     * cross checks the required field with context to make sure all fields required are fulfiled
     */
    validateContext(requiredFields: Array<string>, context: any): void;
    /**
     * @param {Object} - context
     * @returns {void}
     * @throws - throws error if something goes wrong
     * Builds a query param from a object
     * { name: 'john', place: 'here' } -> ?name=john&place=here
     */
    buildQueryParams(context: any): string;
}
