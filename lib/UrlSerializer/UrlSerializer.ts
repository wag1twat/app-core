import { OmitBy, ReplaceAll, Split } from "../utils"
import { nonEmptyString } from "../utils/non-empty-string"
import { accsessors, defaultSerializeOptions } from "./utils/constants"
import { UniqueParamException } from "./utils/exceptions"
import { UrlSerializerOptions, UrlSerializerParams, UrlSerializerQueries } from './utils/types'
import { Guards } from "../Guards"

class UrlSerializer<Path extends string, Params extends UrlSerializerParams<string>> {
    private _path: Path
    private _params: Params
    private _options: Partial<UrlSerializerOptions>
    constructor(path: Path, options: Partial<UrlSerializerOptions> = defaultSerializeOptions, params: Params = {} as Params) {
        this._path = path
        this._params = params
        this._options = options
        this.extend = this.extend.bind(this)
        this.updateParams = this.updateParams.bind(this)
        this.pathJoinParams = this.pathJoinParams.bind(this)
        this.path = this.path.bind(this)
        this.param = this.param.bind(this)
        this.build = this.build.bind(this)
        this.link = this.link.bind(this)
        this.serializeQueries = this.serializeQueries.bind(this)
        this.queries = this.queries.bind(this)
    }

    private hasQueryParams<P extends Path>(url: P) {
        return url.indexOf('?') !== -1;
    }

    private paramsPropGetter<P extends Params>(params: P, key: string | (Path & string)) {
        return params[key as keyof P]
    }

    private pathJoinParams<P extends Path, T extends Params>(path: P, params: T): ReplaceAll<P, T> {
        return (path.split('/') as Split<P, '/'>)
                    .map(part => {
                        const param = this.paramsPropGetter(params, part)
                        return param ? param : part
                    })
                    .join('/') as unknown as ReplaceAll<P, T>
    }

    private updateParams<P extends Params>(source: P) {
        const keys = Object.keys(source)

        for(let i = 0; i < keys.length; i++) {
            const key = keys[i]

            if(this.paramsPropGetter(this._params, key)) {
                throw new UniqueParamException()
            }
        }

        this._params = { ...this._params, ...source }
    }

    private serializeQueries(params: object, options: Partial<UrlSerializerOptions> = this._options, prefix?: string): string {
        const { skipNull, skipUndefined } = options

        let result: string[] = []

        for(let key in params) {
            if(params.hasOwnProperty(key)) {
                const value = params[key as (keyof typeof params)]

                if(skipNull === true && Guards.isNull(value)) {
                    continue
                }
                else if(skipUndefined === true && Guards.isUndefined(value)){
                    continue
                }

                if(Guards.isArrayConstructor(params)) {
                    const [pre, post] = accsessors[options.arrayAccsessor || defaultSerializeOptions.arrayAccsessor]
                    key = `${prefix}${pre}${post}`
                }
                else if(Guards.isObjectConstructor(params)) {
                    const [pre, post] = accsessors[options.objectAccsessor || defaultSerializeOptions.objectAccsessor]

                    key = (prefix ? `${prefix}${pre}${key}${post}` : key);
                }
            
                if(Guards.isTypeofObject(value)) {
                    result.push(this.serializeQueries(value, options, key)) 
                }
                else {
                    result.push(`${key}=${encodeURIComponent(value)}`)
                }
            } 
            else {
                continue
            }
        }

        result = result.filter(nonEmptyString)

        result = ([] as string[]).concat.apply([] as string[], result)

        return result.length ? result.join('&') : ""
    }

    private extend(path: undefined, type: 'build'): UrlSerializer<Path, Params>
    private extend<P extends `${string}${string}`>(path: P, type: 'queries'): UrlSerializer<P, Params>
    private extend<P extends Params>(path: ReplaceAll<Path, P>, type: 'link'): UrlSerializer<ReplaceAll<Path, P>, OmitBy<Params, P>>
    private extend<P extends Params>(path: ReplaceAll<Path, P> | `${Path}?${string}` | undefined = undefined, type: 'build' | 'queries' | 'link') {
        if(path === undefined && type === 'build') {
            return new UrlSerializer<Path, Params>(this._path, this._options, this._params)
        }
        if(path && type === 'queries') {
            console.log(path)
            return new UrlSerializer<`${Path}?${string}`, Params>(path, this._options, this._params)
        }
        if(path && type === 'link') {
            return new UrlSerializer<ReplaceAll<Path, P>, OmitBy<Params, P>>(path as ReplaceAll<Path, P>, this._options, this._params)
        }
    }

    public path<T extends string>(value: T) {
        this._path = `${this._path}/${value}` as Path
        return this as unknown as UrlSerializer<`${Path}/${T}`, Params>
    }

    public param<Key extends string>(key: Key) {
        this.updateParams(({ [`:${key}`]: key } as unknown as Params))
        this._path = `${this._path}/:${key}` as Path
        return this as unknown as UrlSerializer<`${Path}/:${Key}`, Params & UrlSerializerParams<Key>>
    }

    private link<P extends Params>(params: P) {
        const path = this.pathJoinParams(this._path, params)
        return {
            path,
            extend: () => this.extend(path, 'link')
        }
    }

    private queriesJoiner(): Path extends `${string}?${string}` ? `${Path}&` : `${Path}?` {
        const isHasQueryParams = this.hasQueryParams(this._path)

        return isHasQueryParams ? `${this._path}&` : `${this._path}?` as any
    }

    private queries<Queries extends UrlSerializerQueries>(queriesObject: Queries, options?: Partial<UrlSerializerOptions>) {
        const path = `${this.queriesJoiner()}${this.serializeQueries(queriesObject, { ...this._options, ...options })}` as const
        return {
            path,
            extend: () => this.extend(path, 'queries')
        }
    }

    public build() {
        return {
            path: this._path,
            extend: () => this.extend(undefined, 'build'),
            link: this.link,
            queries: this.queries
        }
    }
}

export { UrlSerializer }