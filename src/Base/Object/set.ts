import { deepPath } from '../String/deep-path'
import { Guards } from '../../Guards'
import { Keys, Path, PathValue } from '../types'

function isIndex(value: unknown): value is number {
    return !isNaN(parseInt(value as string, 10))
}

function set<O extends object>(object: O) {
    return function <P extends Path<O>, V extends PathValue<O, P>>(path: P, value: V): O {
        if (!Guards.isObject(object)) {
            return object
        }

        const deep = deepPath<O>(path)

        const length = deep.length
        const lastIndex = length - 1

        let index = -1
        let nested: object = object

        while (nested != null && ++index < length) {
            const key = deep[index]
            let newValue: V | never[] | {} = value

            if (index != lastIndex) {
                const objValue = nested[key as Keys<typeof nested>]

                newValue = Guards.isObject(objValue) ? objValue : isIndex(deep[index + 1]) ? [] : {}
            }
            nested[key as Keys<object>] = newValue as (typeof nested)[Keys<object>]
            nested = nested[key as Keys<object>]
        }

        return object
    }
}

export { set }
