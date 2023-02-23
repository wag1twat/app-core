import { OmitBy, ReplaceAll, Split } from "../utils"
import { nonEmptyString } from "../utils/non-empty-string"
import { accsessors, defaultSerializeOptions } from "./utils/constants"
import { UniqueException } from "./utils/exceptions"
import { UrlSerializerOptions, UrlSerializerParams, UrlSerializerQueries } from './utils/types'
import { Guards } from "../Guards"

class UrlSerializer<S extends `${string}`, P extends UrlSerializerParams<`:${string}`>> {
    private _path: S
    private _params: P
    private _options: Partial<UrlSerializerOptions>
    constructor(path: S, options: Partial<UrlSerializerOptions> = defaultSerializeOptions, params: P = {} as P) {
        this._path = path
        this._params = params
        this._options = options
        this.extendInstancePath = this.extendInstancePath.bind(this)
        this.extendInstanceLink = this.extendInstanceLink.bind(this)
        this.assignParams = this.assignParams.bind(this)
        this.joinParams = this.joinParams.bind(this)
        this.link = this.link.bind(this)
        this.queries = this.queries.bind(this)
        this.serializeQueries = this.serializeQueries.bind(this)
    }
    public  path<T extends `${string}`>(str: T) {
        return new UrlSerializer<`${S}/${T}`, P>(`${this._path}/${str}`, this._options, this._params)
    }
    public param<T extends `${string}`>(str: T) {
        this.assignParams(({ [`:${str}`]: str } as unknown as P))
        return new UrlSerializer<`${S}/:${T}`, P & { [K in `:${T}`]: string }>(`${this._path}/:${str}`, this._options, this._params)
    }
    public build() {
        return {
            path: this._path,
            extend: this.extendInstancePath,
            link: this.link,
            queries: this.queries
        }
    }

    private tupleGetter<T extends P>(params: T, key: string | (S & string)){
        return params[key as keyof T]
    }
    private joinParams<T extends P>(params: T): ReplaceAll<S, T> {
        const tuple = (this._path.split('/') as Split<S, '/'>)
        const map = tuple.map(part => {
            const replacedPart = this.tupleGetter(params, part)
            return replacedPart ? replacedPart : part
        })
        return map.join('/') as any
    }
    private assignParams<T extends P>(source: T){
        const keys = Object.keys(source)

        for(let i = 0; i < keys.length; i++) {
            const key = keys[i]

            if(this._params[key as keyof P]) {
                throw new UniqueException()
            }
        }

        this._params = Object.assign(this._params, source)
    }
    private extendInstancePath(){
        return new UrlSerializer<S, P>(this._path, this._options, this._params)
    }
    private extendInstanceLink<T extends P>(path: ReplaceAll<S, T>){
        return new UrlSerializer<typeof path, OmitBy<P, T>>(path, this._options, this._params)
    }
    private link<T extends P>(params: T){
        const path = this.joinParams(params)
        return {
            path,
            extend: () => this.extendInstanceLink(path)
        }
    }
    private queries<T extends UrlSerializerQueries>(params: T, options?: Partial<UrlSerializerOptions>) {
        const queries = this.serializeQueries(params, Object.assign(this._options, options))

        const path: `${S}?${string}` = `${this._path}?${queries}`

        return {
            path,
            extend: this.extendInstancePath
        }
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
}

export { UrlSerializer }