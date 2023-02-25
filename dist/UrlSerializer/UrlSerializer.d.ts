import { Types } from '../Base';
import { UrlSerializerOptions, UrlSerializerParams } from './utils';
declare class UrlSerializer<Path extends string, Params extends UrlSerializerParams<string>> {
    private _path;
    private _params;
    private _options;
    constructor(path: Path, options?: Partial<UrlSerializerOptions>, params?: Params);
    private setupParam;
    private extend;
    path<T extends string>(value: T): UrlSerializer<`${Path}/${T}`, Params>;
    param<Key extends string>(key: Key): UrlSerializer<`${Path}/:${Key}`, Params & UrlSerializerParams<Key>>;
    private link;
    private queries;
    build(): {
        path: Path;
        extend: () => UrlSerializer<Path, Params>;
        link: <P extends Params>(params: P) => {
            path: Types.String.ReplaceAll<Path, P, "">;
            extend: () => UrlSerializer<Types.String.ReplaceAll<Path, P, "">, Omit<Params, keyof P>>;
        };
        queries: <Queries extends {
            [x: string]: boolean | Types.Utility.StringOrNumber | (Types.Utility.StringOrNumber | null | undefined)[] | any | null | undefined;
        }>(queriesObject: Queries, options?: Partial<UrlSerializerOptions> | undefined) => {
            path: Path extends `${string}?${string}` ? `${Path}&${string}` : `${Path}?${string}`;
            extend: () => UrlSerializer<Path extends `${string}?${string}` ? `${Path}&${string}` : `${Path}?${string}`, Params>;
        };
    };
}
export { UrlSerializer };
