import { Path } from '../types'
import { get as _get } from './get'
import { toQueries as _toQueries, ToQueriesOptions } from './to-queries'

export function $Object<O extends object>(obj: O) {
    return {
        get: <P extends Path<O>>(key: P) => _get(obj)(key),
        toQueries: (options?: Partial<ToQueriesOptions>) => _toQueries(obj)(options),
    }
}
