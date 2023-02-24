import { StringOrNumber } from "../../utils"

type UrlSerializerOptions = {
    objectAccsessor: '.' | '{}' | '[]',
    arrayAccsessor: '.' | '{}' | '[]',
    skipUndefined: boolean
    skipNull: boolean
}

type UrlSerializerParamKey<T extends string> =`:${T}`
type UrlSerializerParam = string
type UrlSerializerParams<T extends string> = {
    [K in UrlSerializerParamKey<T>]: UrlSerializerParam
}

type UrlSerializerQueries = {
    [x : string]: (StringOrNumber | boolean | undefined | null) | Array<StringOrNumber | null | undefined> | UrlSerializerQueries
} & {}


export type { UrlSerializerParams, UrlSerializerOptions, UrlSerializerQueries }