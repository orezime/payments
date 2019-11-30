import { IMiscellaneous, Options, Country, Bank } from '../../typings';
export declare class Miscellaneous implements IMiscellaneous {
    options: Options;
    constructor(options: Options);
    /**
    |--------------------------------------------------
    | List all available countries paystack supports
    |--------------------------------------------------
    */
    listCountries(): Promise<Array<Country>>;
    /**
    |--------------------------------------------------
    | List all available banks in nigeria that paystack supports
    |--------------------------------------------------
    */
    listBanks(): Promise<Array<Bank>>;
}
