import { JSONFind, JSONPath } from '../types'
import split from '../String/split'

const memoStringToPath = () => {
    const cache: Record<string, string[]> = {}
    return <O extends object>(path: JSONPath<O>) => {
        if (cache[path]) {
            return cache[path]
        }
        cache[path] = split(path)('.')
        return cache[path]
    }
}

const stringToPath = memoStringToPath()

const set = <O extends object>(obj: O) => {
    return <Path extends JSONPath<O>>(path: Path): JSONFind<O, Path> | undefined => {
        const keys = stringToPath<O>(path)

        let index = 0,
            length = keys.length,
            res: any = obj

        while (res != null && index < length) {
            res = res[keys[index++]]
        }

        return index && index == length ? res : (undefined as any)
    }
}

export default set
