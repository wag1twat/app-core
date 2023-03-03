import { noEmptyString } from '../../rules'
import { Guards } from '../../../Guards'
import { ToQueriesOptions } from './types'
import { defaultToQueriesOptions, toQueriesAccsessors } from './constants'
import { $Object } from '../Object'
import { Path } from '../../types'

const toQueries =
    <O extends object>(obj: O) =>
    (options: Partial<ToQueriesOptions> = defaultToQueriesOptions, prefix?: string): string => {
        const { skipNull, skipUndefined } = options

        let result: string[] = []

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = $Object(obj).get(key as unknown as Path<O>)

                if (skipNull === true && Guards.isNull(value)) {
                    continue
                } else if (skipUndefined === true && Guards.isUndefined(value)) {
                    continue
                }

                let accsessor: string = key

                if (Guards.isArrayConstructor(obj)) {
                    const [pre, post] =
                        toQueriesAccsessors[
                            options.arrayAccsessor || defaultToQueriesOptions.arrayAccsessor
                        ]
                    accsessor = `${prefix}${pre}${post}`
                } else if (Guards.isObjectConstructor(obj)) {
                    const [pre, post] =
                        toQueriesAccsessors[
                            options.objectAccsessor || defaultToQueriesOptions.objectAccsessor
                        ]
                    accsessor = prefix ? `${prefix}${pre}${accsessor}${post}` : accsessor
                }

                if (Guards.isObject(value)) {
                    result.push(toQueries(value)(options, accsessor))
                } else {
                    result.push(`${accsessor}=${encodeURIComponent(`${value}`)}`)
                }
            } else {
                continue
            }
        }

        result = result.filter(noEmptyString)

        result = ([] as string[]).concat.apply([] as string[], result)

        return result.length ? result.join('&') : ''
    }

export { toQueries }
