import { Guards } from "../Guards"
import { nonEmptyString } from './rules'
import { Types } from "./Types"



namespace Base {
    export function Object<O extends object>(obj: O) {
        function get<K extends string>(key: K | keyof O){
            return obj[key as Exclude<typeof key, K>]
        }

        function toQueries(options: Partial<Types.Object.ToQueriesOptions> = Types.Object.defaultToQueriesOptions, prefix?: string): string {
            const { skipNull, skipUndefined } = options

            let result: string[] = []

            for(let key in obj) {
                if(obj.hasOwnProperty(key)) {
                    const value = get(key)

                    if(skipNull === true && Guards.isNull(value)) {
                        continue
                    }
                    else if(skipUndefined === true && Guards.isUndefined(value)){
                        continue
                    }

                    let accsessor: string = key

                    if(Guards.isArrayConstructor(obj)) {
                        const [pre, post] = Types.Object.toQueriesAccsessors[options.arrayAccsessor || Types.Object.defaultToQueriesOptions.arrayAccsessor]
                        accsessor = `${prefix}${pre}${post}`
                    }
                    else if(Guards.isObjectConstructor(obj)) {
                        const [pre, post] = Types.Object.toQueriesAccsessors[options.objectAccsessor || Types.Object.defaultToQueriesOptions.objectAccsessor]
                        accsessor = (prefix ? `${prefix}${pre}${accsessor}${post}` : accsessor);
                    }
                
                    if(Guards.isTypeofObject(value)) {
                        result.push(Object(value).toQueries(options, accsessor)) 
                    }
                    else {
                        result.push(`${accsessor}=${encodeURIComponent(`${value}`)}`)
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

        return {
            get,
            toQueries
        }
    }

    export function String<S extends string>(string: S) {
        function hasQueryParams() {
            return `${string}`.indexOf('?') !== -1;
        }

        function joinQueryString<Q extends string>(queryString: Q): S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}` {
            const isHasQueryParams = hasQueryParams()
            return isHasQueryParams ? `${string}&${queryString}` : `${string}?${queryString}` as any
        }

        function split<Separator extends string>(separator: string, limit?: number | undefined): Types.String.Split<S, Separator> {
            return `${string}`.split(separator, limit) as any
        }

        function replaceAllSeparatedString<P extends { [x: string]: any }, Separator extends string = string>
        (separator: Separator, properties: P): Types.String.ReplaceAll<S, P> {
            const result = []

            const parts = split(separator)

            for(let i = 0; i < parts.length; i++) {
                const property = Base.Object<P>(properties).get(parts[i])

                if(Base.Object<P>(properties).get(parts[i])) {
                    result.push(property)
                } else {
                    result.push(parts[i])
                }
            }

            return result.join(separator) as Types.String.ReplaceAll<S, P>
        }
        
        return {
            split,
            replaceAllSeparatedString,
            hasQueryParams,
            joinQueryString
        }
    }
}

export { Base }