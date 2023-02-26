import { Types } from '../Types';
export declare function $Object<O extends object>(obj: O): {
    get: (key: string | keyof O) => O[Exclude<keyof O, string>] | undefined;
    getXPath: (path: Types.Utility.JSONPath<O>) => Types.Utility.JSONFind<O, Types.Utility.JSONPath<O, "">> | undefined;
    toQueries: (options?: Partial<Types.Object.ToQueriesOptions>) => string;
};
