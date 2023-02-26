export declare function $String<S extends string>(string: S): {
    split: <Separator extends string | RegExp>(separator: Separator, limit?: number | undefined) => Separator extends string ? import("..").Types.String.Split<S, Separator> : string[];
    replaceAll: <Separator_1 extends string, P extends {
        [x: string]: any;
    }>(separator: Separator_1, p: P) => import("..").Types.String.ReplaceAll<S, P, "">;
    hasQueryParams: () => () => boolean;
    joinQueryString: <Q extends string>(queries: Q) => S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}`;
};
