import { Types } from '../Types'
import split from '../String/split'

const memoizePath = () => {
    const cache: Record<string, string[]> = {}
    return <O extends object>(path: Types.Utility.JSONPath<O>) => {
        if(cache[path]) {
            return cache[path]
        }
        cache[path] = split(path)('.')
        return cache[path]
    }
}

const getPath = memoizePath()

const getXPath = <O extends object>(obj: O) => {
    return <Path extends Types.Utility.JSONPath<O>>(
        path: Path
    ): Types.Utility.JSONFind<O, Path> | undefined => {
        const keys = getPath<O>(path)

        let index = 0, 
            length = keys.length,
            res: any = obj

        while (res != null && index < length) {
            res = res[keys[index++]];
        }

        return (index && index == length) ? res : undefined as any; 
    }
}



export default getXPath
