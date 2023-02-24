export declare namespace Types {
    namespace Utility {
        type StringOrNumber = string | number;
    }
    namespace String {
        type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
        type ReplaceAll<T extends string, M extends {
            [k: string]: string;
        }, A extends string = ""> = T extends `${Extract<keyof M, string>}${infer R}` ? (T extends `${infer K}${R}` ? ReplaceAll<R, M, `${A}${M[Extract<K, keyof M>]}`> : never) : T extends `${infer F}${infer R}` ? ReplaceAll<R, M, `${A}${F}`> : A;
    }
    namespace Object {
        interface ToQueriesOptions {
            objectAccsessor: '.' | '{}' | '[]';
            arrayAccsessor: '.' | '{}' | '[]';
            skipUndefined: boolean;
            skipNull: boolean;
        }
        const defaultToQueriesOptions: ToQueriesOptions;
        const toQueriesAccsessors: {
            '.': readonly [".", ""];
            '[]': readonly ["[", "]"];
            '{}': readonly ["{", "}"];
        };
    }
}
