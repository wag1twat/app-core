import { StringOrNumber } from "../../utils"

type SerializerOptions = {
    objectAccsessor: '.' | '{}' | '[]',
    arrayAccsessor: '.' | '{}' | '[]',
    skipUndefined: boolean
    skipNull: boolean
}

type SerializerParams<T extends string> = {
    [K in T]: string
}

type SerializerQueries = {
    [x : string]: (StringOrNumber | boolean | undefined | null) | Array<StringOrNumber | null | undefined> | SerializerQueries
} & {}


export type { SerializerParams, SerializerOptions, SerializerQueries }