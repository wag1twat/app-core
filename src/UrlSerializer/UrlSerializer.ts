import { Base, Types } from '../Base'
import {
    defaultSerializeOptions,
    UrlSerializerOptions,
    UrlSerializerParams,
    UrlSerializerQueries,
    UniqueParamException,
} from './utils'

class UrlSerializer<
    Path extends string,
    Params extends UrlSerializerParams<string>
> {
    private _path: Path
    private _params: Params
    private _options: Partial<UrlSerializerOptions>
    constructor(
        path: Path,
        options: Partial<UrlSerializerOptions> = defaultSerializeOptions,
        params: Params = {} as Params
    ) {
        this._path = path
        this._params = params
        this._options = options
        this.extend = this.extend.bind(this)
        this.setupParam = this.setupParam.bind(this)
        this.path = this.path.bind(this)
        this.param = this.param.bind(this)
        this.build = this.build.bind(this)
        this.link = this.link.bind(this)
        this.queries = this.queries.bind(this)
    }

    private setupParam<Key extends string>(key: Key) {
        if (Base.Object(this._params).get(key)) {
            throw new UniqueParamException(key)
        }
        this._params = { ...this._params, [`:${key}`]: key }
    }

    private extend(path: undefined, type: 'build'): UrlSerializer<Path, Params>
    private extend<P extends `${string}${string}`>(
        path: P,
        type: 'queries'
    ): UrlSerializer<P, Params>
    private extend<P extends Params>(
        path: Types.String.ReplaceAll<Path, P>,
        type: 'link'
    ): UrlSerializer<Types.String.ReplaceAll<Path, P>, Omit<Params, keyof P>>
    private extend<P extends Params>(
        path:
            | Types.String.ReplaceAll<Path, P>
            | `${Path}?${string}`
            | undefined = undefined,
        type: 'build' | 'queries' | 'link'
    ) {
        if (path === undefined && type === 'build') {
            return new UrlSerializer<Path, Params>(
                this._path,
                this._options,
                this._params
            )
        }
        if (path && type === 'queries') {
            return new UrlSerializer<`${Path}?${string}`, Params>(
                path,
                this._options,
                this._params
            )
        }
        if (path && type === 'link') {
            return new UrlSerializer<
                Types.String.ReplaceAll<Path, P>,
                Omit<Params, keyof P>
            >(
                path as Types.String.ReplaceAll<Path, P>,
                this._options,
                this._params
            )
        }
    }

    public path<T extends string>(value: T) {
        this._path = `${this._path}/${value}` as Path
        return this as unknown as UrlSerializer<`${Path}/${T}`, Params>
    }

    public param<Key extends string>(key: Key) {
        this.setupParam(key)
        this._path = `${this._path}/:${key}` as Path
        return this as unknown as UrlSerializer<
            `${Path}/:${Key}`,
            Params & UrlSerializerParams<Key>
        >
    }

    private link<P extends Params>(params: P) {
        const path = Base.String(this._path).replaceAllSeparatedString(
            '/',
            params
        )
        return {
            path,
            extend: () => this.extend(path, 'link'),
        }
    }

    private queries<Queries extends UrlSerializerQueries>(
        queriesObject: Queries,
        options?: Partial<UrlSerializerOptions>
    ) {
        const path = Base.String(this._path).joinQueryString(
            Base.Object(queriesObject).toQueries({
                ...this._options,
                ...options,
            })
        )
        return {
            path,
            extend: () => this.extend(path, 'queries'),
        }
    }

    public build() {
        return {
            path: this._path,
            extend: () => this.extend(undefined, 'build'),
            link: this.link,
            queries: this.queries,
        }
    }
}

export { UrlSerializer }
