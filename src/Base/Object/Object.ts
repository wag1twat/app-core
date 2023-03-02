import { JSONPath } from '../types'
import _get from './get'
import { toQueries as _toQueries, ToQueriesOptions } from './to-queries'

export function $Object<O extends object>(obj: O) {
    return {
        get: <Path extends JSONPath<O>>(key: Path) => _get(obj)(key),
        toQueries: (options?: Partial<ToQueriesOptions>) => _toQueries(obj)(options),
    }
}
