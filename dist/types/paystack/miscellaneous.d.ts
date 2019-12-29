import { IMiscellaneous, Options, Country, Bank } from '../../typings';
/**
 * @constructor Miscellaneous
 * Provides miscellaneous REST API endpoints for paystack customers
 * @docs - https://developers.paystack.co/reference#list-banks
 */
export declare class Miscellaneous implements IMiscellaneous {
    options: Options;
    url: string;
    axios: any;
    constructor(options: Options);
    /**
     * @returns {Promise<Array<Country>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-countries
     */
    listCountries(): Promise<Array<Country>>;
    /**
     * @returns {Promise<Array<Country>>}
     * @throws - throws error if something goes wrong
     * @docs - https://developers.paystack.co/reference#list-banks
     */
    listBanks(): Promise<Array<Bank>>;
}
