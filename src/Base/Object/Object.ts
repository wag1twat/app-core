import { Types } from '../Types'
import _get from './get'
import _getXPath from './get-xpath'
import _toQueries from './to-queries'

export function $Object<O extends object>(obj: O) {
    return {
        get: (key: string | keyof O) => _get(obj)(key),
        getXPath: (path: Types.Utility.JSONPath<O>) => _getXPath(obj)(path),
        toQueries: (options?: Partial<Types.Object.ToQueriesOptions>) => _toQueries(obj)(options),
    }
}
