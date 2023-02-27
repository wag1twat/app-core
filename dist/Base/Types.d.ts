export declare namespace Types {
    namespace Utility {
        type IsAny<T> = unknown extends T & string ? true : false;
        type StringOrNumber = string | number;
        type Primitive = string | number | bigint | boolean | undefined | symbol;
        type JSONPath<T, Prefix = ''> = {
            [K in keyof T]: T[K] extends Primitive | Array<any> ? `${string & Prefix}${string & K}` : `${string & Prefix}${string & K}` | (IsAny<T[K]> extends false ? JSONPath<T[K], `${string & Prefix}${string & K}.`> : never);
        }[keyof T];
        type JSONFind<T extends Record<string, any>, Path = JSONPath<T>> = Path extends keyof T ? T[Path] : Path extends `${infer Up}.${infer Down}` ? IsAny<T[Up]> extends false ? JSONFind<T[Up], Down> : never : never;
    }
    namespace String {
        type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
        type ReplaceAll<T extends string, M extends {
            [k: string]: string;
        }, A extends string = ''> = T extends `${Extract<keyof M, string>}${infer R}` ? T extends `${infer K}${R}` ? ReplaceAll<R, M, `${A}${M[Extract<K, keyof M>]}`> : never : T extends `${infer F}${infer R}` ? ReplaceAll<R, M, `${A}${F}`> : A;
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
    namespace Array {
        type Of<T extends any[]> = T extends (infer U)[] ? U : never;
        namespace Sort {
            type Order = 'ASC' | 'DESC' | 'default';
            type FieldObject<T extends any[], XPath extends Utility.JSONPath<Of<T>>> = {
                xpath: XPath;
                handler: (item: Utility.JSONFind<Of<T>, XPath> | undefined) => Utility.Primitive;
            };
            type Field<T extends any[], XPath extends Utility.JSONPath<Of<T>>> = XPath | FieldObject<T, XPath>;
            type State<T extends any[]> = {
                collection: T;
                order: Order;
                orders: Order[];
                field?: Field<T, Utility.JSONPath<Of<T>>>;
            };
            type Options<T extends any[], XPath extends Utility.JSONPath<Of<T>>> = {
                field?: Field<T, XPath>;
                order?: Order;
                orders?: Order[];
                onUpdate: (state: State<T>) => void;
            };
            type UpdateOptions<T extends any[], XPath extends Utility.JSONPath<Of<T>>> = {
                field?: Field<T, XPath>;
                noUpdateOrderFalsyEqualXPath?: boolean;
            };
            const defaultOrders: Order[];
            const defaultOrder: Order;
        }
        namespace Paging {
            type State = {
                page: number;
                isFirstPage: boolean;
                isLastPage: boolean;
                _pagingPage: number;
                isFirstPagingPage: boolean;
                isLastPagingPage: boolean;
                _pagingPages: number[][];
                pages: number[];
            };
            type Options = {
                itemsCount: number;
                page: number;
                pageSize: number;
                paginationSize: number;
                onPagingUpdate?: (state: State) => void;
            };
        }
        namespace PagingCollection {
            type State<T extends any[]> = Paging.State & {
                collection: T;
            };
            type Options<T extends any[]> = {
                page: number;
                pageSize: number;
                paginationSize: number;
                onUpdate: (state: State<T>) => void;
            };
        }
    }
}
