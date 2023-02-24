import { Types } from "../../Base/Types";
type UrlSerializerParamKey<T extends string> = `:${T}`;
type UrlSerializerParam = string;
type UrlSerializerParams<T extends string> = {
    [K in UrlSerializerParamKey<T>]: UrlSerializerParam;
};
type UrlSerializerQueries = {
    [x: string]: (Types.Utility.StringOrNumber | boolean | undefined | null) | Array<Types.Utility.StringOrNumber | null | undefined> | UrlSerializerQueries;
} & {};
interface UrlSerializerOptions extends Types.Object.ToQueriesOptions {
}
export type { UrlSerializerOptions, UrlSerializerParams, UrlSerializerQueries };
