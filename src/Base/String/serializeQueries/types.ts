import { ArrayOf, ReplaceAll, Split } from "../../../Base"

type Parts<Q extends string> = Split<Q, '&'>
type _IsArray<S extends string> = S extends `${string}[]=${string}` ? true : false
type _IsObject<S extends string> = S extends `${string}.${string}=${string}` ? true : false
type _IsPrimitive<S extends string> = _IsObject<S> extends false
    ? _IsArray<S> extends false
        ? S extends `${string}=${string}`
            ? true
            : false
        : false
    : false

type IsArray<S extends string> = _IsPrimitive<S> extends false
    ? _IsObject<S> extends false
        ? S extends `${string}[]=${string}`
            ? true
            : false
        : false
    : false

type IsObject<S extends string> = _IsPrimitive<S> extends false
    ? _IsArray<S> extends false
        ? S extends `${string}.${string}=${string}`
            ? true
            : false
        : false
    : false

type IsPrimitive<S extends string> = _IsObject<S> extends false
    ? _IsArray<S> extends false
        ? S extends `${string}=${string}`
            ? true
            : false
        : false
    : false

type ReObject<P extends string, S extends string> = ReplaceAll<S, { [J in `${P}.`]: '' }>

type RecursiveFind<S extends string, Is extends IsArray<S> = IsArray<S>> = {
    [K in Is extends false ? `${Split<S, '.'>[0]}` : `${Split<S, '[]'>[0]}`]: Is extends false
        ? IsObject<ReObject<K, S>> extends true
            ? RecursiveFind<ReObject<K, S>>
            : IsArray<ReObject<K, S>> extends false
            ? { [N in `${Split<ReObject<K, S>, '='>[0]}`]: string }
            : RecursiveFind<ReObject<K, S>>
        : string[]
}

type FindProperties<P extends Parts<string>> = {
    [K in ArrayOf<P>]: IsPrimitive<K> extends true
        ? {
              [H in Split<K, '='>[0]]: string
          }
        : RecursiveFind<K>
}[ArrayOf<P>]

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never

type InferUnionToIntersection<U> = UnionToIntersection<U> extends infer O ? { [K in keyof O]: O[K] } : never

type SerializeQueriesResult<S extends string> = InferUnionToIntersection<FindProperties<Parts<S>>>

export type { SerializeQueriesResult }