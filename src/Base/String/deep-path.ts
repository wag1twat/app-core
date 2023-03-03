import { split } from './split'
import { Path } from '../types'

const memoizeDeepPath = () => {
    const cache: Record<string, string[]> = {}
    return <O extends object>(path: Path<O>) => {
        if (cache[path]) {
            return cache[path]
        }

        cache[path] = split(path)('.')

        return cache[path]
    }
}

const deepPath = memoizeDeepPath()

export { deepPath }