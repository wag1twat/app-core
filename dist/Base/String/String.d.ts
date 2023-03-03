export declare function $String<S extends string>(string: S): {
    split: <Separator extends string | RegExp>(separator: Separator, limit?: number | undefined) => Separator extends string ? import("..").Split<S, Separator> : string[];
    replaceAll: <Separator_1 extends string, P extends object>(separator: Separator_1, p: P) => import("..").ReplaceAll<S, P, "">;
    hasQueryParams: () => () => boolean;
    joinQueries: <Q extends string>(queries: Q) => S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}`;
};
