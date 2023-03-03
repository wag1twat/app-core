export type Primitive = null | undefined | string | number | boolean | symbol | bigint

export type BrowserNativeObject = Date | FileList | File

export type IsAny<T> = 0 extends 1 & T ? true : false

export type IsEqual<T1, T2> = T1 extends T2
    ? (<G>() => G extends T1 ? 1 : 2) extends <G>() => G extends T2 ? 1 : 2
        ? true
        : false
    : false

export type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true

export type ArrayKey = number

export type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>

export type ArrayOf<T extends any[]> = T extends (infer U)[] ? U : never

export type StringOrNumber = string | number

export type Split<S extends string, D extends string> = string extends S
    ? string[]
    : S extends ''
    ? []
    : S extends `${infer T}${D}${infer U}`
    ? [T, ...Split<U, D>]
    : [S]

export type ReplaceAll<
    T extends string,
    M extends { [k: string]: string },
    A extends string = ''
> = T extends `${Extract<keyof M, string>}${infer R}`
    ? T extends `${infer K}${R}`
        ? ReplaceAll<R, M, `${A}${M[Extract<K, keyof M>]}`>
        : never
    : T extends `${infer F}${infer R}`
    ? ReplaceAll<R, M, `${A}${F}`>
    : A

type AsFunctionWithArgsOf<T extends unknown[] | readonly unknown[]> = (...args: T) => any

type TailArgs<T> = T extends (x: any, ...args: infer T) => any ? T : never

type Tail<T extends unknown[] | readonly unknown[]> = TailArgs<AsFunctionWithArgsOf<T>>

type AsDescendingLengths<T extends unknown[] | readonly unknown[]> = [] extends T
    ? [0]
    : [ArrayOf<ArrayOf<AsDescendingLengths<Tail<T>>[]>>, T['length']]

export type IndicesOf<T extends unknown[] | readonly unknown[]> = number extends T['length']
    ? number
    : [] extends T
    ? never
    : ArrayOf<AsDescendingLengths<Tail<T>>>
