import { Path, PathValue } from '../types';
import { ToQueriesOptions } from './to-queries';
export declare function $Object<O extends object>(obj: O): {
    get: <P extends Path<O>>(key: P) => PathValue<O, P> | undefined;
    set: <P_1 extends Path<O>, V extends PathValue<O, P_1>>(key: P_1, value: V) => O;
    toQueries: (options?: Partial<ToQueriesOptions>) => string;
};
