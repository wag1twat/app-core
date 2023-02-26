import { nonEmptyString } from '../rules'
import { Types } from '../Types'
import { Guards } from '../../Guards'
import get from './get'

const toQueries =
    <O extends object>(obj: O) =>
    (
        options: Partial<Types.Object.ToQueriesOptions> = Types.Object.defaultToQueriesOptions,
        prefix?: string
    ): string => {
        const { skipNull, skipUndefined } = options

        let result: string[] = []

        for (let key in obj) {
            const value = get(obj)(key)

            if (skipNull === true && Guards.isNull(value)) {
                continue
            } else if (skipUndefined === true && Guards.isUndefined(value)) {
                continue
            }

            let accsessor: string = key

            if (Guards.isArrayConstructor(obj)) {
                const [pre, post] =
                    Types.Object.toQueriesAccsessors[
                        options.arrayAccsessor ||
                            Types.Object.defaultToQueriesOptions.arrayAccsessor
                    ]
                accsessor = `${prefix}${pre}${post}`
            } else if (Guards.isObjectConstructor(obj)) {
                const [pre, post] =
                    Types.Object.toQueriesAccsessors[
                        options.objectAccsessor ||
                            Types.Object.defaultToQueriesOptions.objectAccsessor
                    ]
                accsessor = prefix ? `${prefix}${pre}${accsessor}${post}` : accsessor
            }

            if (Guards.isObject(value)) {
                result.push(toQueries(value)(options, accsessor))
            } else {
                result.push(`${accsessor}=${encodeURIComponent(`${value}`)}`)
            }
        }

        result = result.filter(nonEmptyString)

        result = ([] as string[]).concat.apply([] as string[], result)

        return result.length ? result.join('&') : ''
    }

export default toQueries
