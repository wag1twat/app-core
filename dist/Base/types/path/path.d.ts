import { BrowserNativeObject, IsAny, IsEqual, Primitive, ArrayKey, IsTuple, TupleKeys } from '../utils';
type AnyIsEqual<T1, T2> = T1 extends T2 ? (IsEqual<T1, T2> extends true ? true : never) : never;
type PathImpl<K extends string | number, V, TraversedTypes> = V extends Primitive | BrowserNativeObject ? `${K}` : true extends AnyIsEqual<TraversedTypes, V> ? `${K}` : `${K}` | `${K}.${PathInternal<V, TraversedTypes | V>}`;
type PathInternal<T, TraversedTypes = T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
    [K in TupleKeys<T>]-?: PathImpl<K & string, T[K], TraversedTypes>;
}[TupleKeys<T>] : PathImpl<ArrayKey, V, TraversedTypes> : {
    [K in keyof T]-?: PathImpl<K & string, T[K], TraversedTypes>;
}[keyof T];
type ArrayPathImpl<K extends string | number, V, TraversedTypes> = V extends Primitive | BrowserNativeObject ? IsAny<V> extends true ? string : never : V extends ReadonlyArray<infer U> ? U extends Primitive | BrowserNativeObject ? IsAny<V> extends true ? string : never : true extends AnyIsEqual<TraversedTypes, V> ? never : `${K}` | `${K}.${ArrayPathInternal<V, TraversedTypes | V>}` : true extends AnyIsEqual<TraversedTypes, V> ? never : `${K}.${ArrayPathInternal<V, TraversedTypes | V>}`;
type ArrayPathInternal<T, TraversedTypes = T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
    [K in TupleKeys<T>]-?: ArrayPathImpl<K & string, T[K], TraversedTypes>;
}[TupleKeys<T>] : ArrayPathImpl<ArrayKey, V, TraversedTypes> : {
    [K in keyof T]-?: ArrayPathImpl<K & string, T[K], TraversedTypes>;
}[keyof T];
type ArrayPath<T> = T extends any ? ArrayPathInternal<T> : never;
export type Path<T> = T extends any ? PathInternal<T> : never;
export type PathValue<T, P extends Path<T> | ArrayPath<T>> = T extends any ? P extends `${infer K}.${infer R}` ? K extends keyof T ? R extends Path<T[K]> ? PathValue<T[K], R> : never : K extends `${ArrayKey}` ? T extends ReadonlyArray<infer V> ? PathValue<V, R & Path<V>> : never : never : P extends keyof T ? T[P] : P extends `${ArrayKey}` ? T extends ReadonlyArray<infer V> ? V : never : never : never;
export {};
