import { deepPath } from '../String/deep-path'
import { Path, PathValue } from '../types'

function get<O extends object>(obj: O) {
    return function <P extends Path<O>>(path: P): PathValue<O, P> | undefined {
        const deep = deepPath<O>(path)

        let index = 0,
            length = deep.length,
            nested: object = obj

        while (nested != null && index < length) {
            nested = nested[deep[index++] as keyof typeof nested]
        }
        return index && index == length ? (nested as PathValue<O, P>) : undefined
    }
}

export { get }
