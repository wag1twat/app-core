type Split<S extends string, D extends string> =
    string extends S ? string[] :
    S extends '' ? [] :
    S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type ReplaceAll<T extends string, M extends { [k: string]: string },
    A extends string = ""> =
    T extends `${Extract<keyof M, string>}${infer R}` ? (
        T extends `${infer K}${R}` ?
        ReplaceAll<R, M, `${A}${M[Extract<K, keyof M>]}`>
        : never
    ) : T extends `${infer F}${infer R}` ? ReplaceAll<R, M, `${A}${F}`> : A

type OmitBy<P, T extends P> = Omit<P, keyof T>


type StringOrNumber = string | number

export type { Split, ReplaceAll, StringOrNumber }