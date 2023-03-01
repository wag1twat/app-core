import { JSONPath } from '../types'
import _get from './get'
import _getXPath from './get-xpath'
import { toQueries as _toQueries, ToQueriesOptions } from './to-queries'

export function $Object<O extends object>(obj: O) {
    return {
        get: (key: string | keyof O) => _get(obj)(key),
        getXPath: (path: JSONPath<O>) => _getXPath(obj)(path),
        toQueries: (options?: Partial<ToQueriesOptions>) => _toQueries(obj)(options),
    }
}
