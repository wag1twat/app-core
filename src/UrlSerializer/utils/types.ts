import { StringOrNumber } from '../../Base'
import { ToQueriesOptions } from '../../Base/Object/to-queries'

type UrlSerializerParamKey<T extends string> = `:${T}`

type UrlSerializerParam = string

type UrlSerializerParams<T extends string> = {
    [K in UrlSerializerParamKey<T>]: UrlSerializerParam
}

type UrlSerializerQueries = {
    [x: string]:
        | (StringOrNumber | boolean | undefined | null)
        | Array<StringOrNumber | null | undefined>
        | UrlSerializerQueries
} & {}

interface UrlSerializerOptions extends ToQueriesOptions {}

export type { UrlSerializerOptions, UrlSerializerParams, UrlSerializerQueries }
