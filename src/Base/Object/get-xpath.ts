import { Types } from '../Types'
import { Guards } from '../../Guards'
import get from './get'
import { $String } from '../String'

const getXPath =
    <O extends object>(obj: O) =>
    <Path extends Types.Utility.JSONPath<O>>(path: Path): Types.Utility.JSONFind<O, Path> | undefined => {
        const parts = $String(`${path}`).split('.')

        const part = parts.shift()

        if (part) {
            const prop = get(obj)(part)

            if (parts.length === 0) {
                return prop as any
            }

            if (!Guards.isUndefined(prop)) {
                if (Guards.isObject(prop)) {
                    return getXPath(prop)(parts.join('.') as any) as any
                }
                return undefined
            }
            return undefined
        }
        return undefined
    }

export default getXPath
