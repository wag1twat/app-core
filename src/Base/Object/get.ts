import { deepPath } from '../String/deep-path'
import { Path, PathValue } from '../types'

function get<O extends object>(obj: O) {
    return function <P extends Path<O>>(path: P): PathValue<O, P> | undefined {
        const deep = deepPath<O>(path)

        let index = 0,
            length = deep.length,
            res: unknown = obj

        while (res != null && index < length) {
            res = res[deep[index++] as keyof typeof res]
        }
        return index && index == length ? (res as PathValue<O, P>) : undefined
    }
}

export { get }
