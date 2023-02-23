import { StringOrNumber } from "../../utils";
type UrlSerializerOptions = {
    objectAccsessor: '.' | '{}' | '[]';
    arrayAccsessor: '.' | '{}' | '[]';
    skipUndefined: boolean;
    skipNull: boolean;
};
type UrlSerializerParams<T extends string> = {
    [K in T]: string;
};
type UrlSerializerQueries = {
    [x: string]: (StringOrNumber | boolean | undefined | null) | Array<StringOrNumber | null | undefined> | UrlSerializerQueries;
} & {};
export type { UrlSerializerParams, UrlSerializerOptions, UrlSerializerQueries };
