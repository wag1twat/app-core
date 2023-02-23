import { OmitBy, ReplaceAll } from "../utils";
import { UrlSerializerOptions, UrlSerializerParams } from './utils/types';
declare class UrlSerializer<S extends `${string}`, P extends UrlSerializerParams<`:${string}`>> {
    private _path;
    private _params;
    private _options;
    constructor(path: S, options?: Partial<UrlSerializerOptions>, params?: P);
    path<T extends `${string}`>(str: T): UrlSerializer<`${S}/${T}`, P>;
    param<T extends `${string}`>(str: T): UrlSerializer<`${S}/:${T}`, P & { [K in `:${T}`]: string; }>;
    build(): {
        path: S;
        extend: () => UrlSerializer<S, P>;
        link: <T extends P>(params: T) => {
            path: ReplaceAll<S, T, "">;
            extend: () => UrlSerializer<ReplaceAll<S, T, "">, OmitBy<P, T>>;
        };
        queries: <T_1 extends {
            [x: string]: boolean | import("../utils/types").StringOrNumber | (import("../utils/types").StringOrNumber | null | undefined)[] | any | null | undefined;
        }>(params: T_1, options?: Partial<UrlSerializerOptions> | undefined) => {
            path: `${S}?${string}`;
            extend: () => UrlSerializer<S, P>;
        };
    };
    private tupleGetter;
    private joinParams;
    private assignParams;
    private extendInstancePath;
    private extendInstanceLink;
    private link;
    private queries;
    private serializeQueries;
}
export { UrlSerializer };
