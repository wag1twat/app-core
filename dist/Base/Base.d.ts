import { Types } from "./Types";
declare namespace Base {
    function Object<O extends object>(obj: O): {
        get: <K extends string>(key: K | keyof O) => O[Exclude<K, K> | Exclude<keyof O, K>];
        toQueries: (options?: Partial<Types.Object.ToQueriesOptions>, prefix?: string) => string;
    };
    function String<S extends string>(string: S): {
        split: <Separator extends string>(separator: string, limit?: number | undefined) => Types.String.Split<S, Separator>;
        replaceAllSeparatedString: <P extends {
            [x: string]: any;
        }, Separator_1 extends string = string>(separator: Separator_1, properties: P) => Types.String.ReplaceAll<S, P, "">;
        hasQueryParams: () => boolean;
        joinQueryString: <Q extends string>(queryString: Q) => S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}`;
    };
}
export { Base };
