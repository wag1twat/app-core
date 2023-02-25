export declare function $Object<O extends object>(obj: O): {
    get: <K extends string>(key: K | keyof O) => O[Exclude<K, K> | Exclude<keyof O, K>] | undefined;
    getXPath: <Path extends import("..").Types.Utility.JSONPath<O, "">>(path: Path) => import("..").Types.Utility.JSONFind<O, Path> | undefined;
    toQueries: (options?: Partial<import("..").Types.Object.ToQueriesOptions>, prefix?: string | undefined) => string;
};
