import _get from './get'
import _getXPath from './get-xpath'
import _toQueries from './to-queries'

export function $Object<O extends object>(obj: O) {
    const get = _get(obj)
    const getXPath = _getXPath(obj)
    const toQueries = _toQueries(obj)

    return {
        get,
        getXPath,
        toQueries,
    }
}
