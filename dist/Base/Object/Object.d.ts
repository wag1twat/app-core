import { JSONPath } from '../types';
import { ToQueriesOptions } from './to-queries';
export declare function $Object<O extends object>(obj: O): {
    get: (key: string | keyof O) => O[Exclude<keyof O, string>] | undefined;
    getXPath: (path: JSONPath<O>) => import("../types").JSONFind<O, JSONPath<O, "">> | undefined;
    toQueries: (options?: Partial<ToQueriesOptions>) => string;
};
