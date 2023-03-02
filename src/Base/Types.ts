export type ArrayOf<T extends any[]> = T extends (infer U)[] ? U : never
export type IsAny<T> = unknown extends T & string ? true : false
export type Primitive = string | number | bigint | boolean | undefined | symbol
export type StringOrNumber = string | number
export type JSONPath<T, Prefix = ''> = {
    [K in keyof T]: T[K] extends Primitive | Array<any>
        ? `${string & Prefix}${string & K}`
        :
              | `${string & Prefix}${string & K}`
              | (IsAny<T[K]> extends false
                    ? JSONPath<T[K], `${string & Prefix}${string & K}.`>
                    : JSONPath<T[K], `${string & Prefix}${string & K}.`>)
}[keyof T]

export type JSONFind<T extends Record<string, any>, Path = JSONPath<T>> = Path extends keyof T
    ? T[Path]
    : Path extends `${infer Up}.${infer Down}`
    ? IsAny<T[Up]> extends false
        ? JSONFind<T[Up], Down>
        : never
    : never
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
