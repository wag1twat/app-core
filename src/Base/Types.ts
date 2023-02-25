export namespace Types {
    export namespace Utility {
        export type StringOrNumber = string | number
    }
    export namespace String {
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
    }
    export namespace Object {
        export interface ToQueriesOptions {
            objectAccsessor: '.' | '{}' | '[]'
            arrayAccsessor: '.' | '{}' | '[]'
            skipUndefined: boolean
            skipNull: boolean
        }
        export const defaultToQueriesOptions: ToQueriesOptions = {
            skipNull: true,
            skipUndefined: true,
            arrayAccsessor: '[]',
            objectAccsessor: '.',
        }
        export const toQueriesAccsessors = {
            '.': ['.', ''] as const,
            '[]': ['[', ']'] as const,
            '{}': ['{', '}'] as const,
        }
    }
}
