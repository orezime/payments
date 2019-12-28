import { Options } from '../../typings';
export declare class Util {
    options: Options;
    constructor(options: Options);
    validateContext(requiredFields: Array<string>, context: any): void;
    buildQueryParams(context: any): string;
}
