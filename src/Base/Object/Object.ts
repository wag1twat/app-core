import { Path, PathValue } from '../types'
import { get as _get } from './get'
import { set as _set } from './set'
import { toQueries as _toQueries, ToQueriesOptions } from './to-queries'

export function $Object<O extends object>(obj: O) {
    return {
        get: <P extends Path<O>>(key: P) => _get(obj)(key),
        set: <P extends Path<O>, V extends PathValue<O, P>>(key: P, value: V) =>
            _set(obj)(key, value),
        toQueries: (options?: Partial<ToQueriesOptions>) => _toQueries(obj)(options),
    }
}
