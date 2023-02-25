export declare function $String<S extends string>(string: S): {
    split: <Separator extends string>(separator: string, limit?: number | undefined) => import("..").Types.String.Split<S, Separator>;
    replaceAll: <P extends {
        [x: string]: any;
    }, Separator_1 extends string = string>(separator: Separator_1, properties: P) => import("..").Types.String.ReplaceAll<S, P, "">;
    hasQueryParams: () => boolean;
    joinQueryString: <Q extends string>(queryString: Q) => S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}`;
};
