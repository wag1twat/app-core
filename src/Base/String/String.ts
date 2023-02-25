import _hasQueryParams from './has-query-params'
import _joinQueries from './join-queries'
import _replaceAll from './replace-all'
import _split from './split'

export function $String<S extends string>(string: S) {
    const hasQueryParams = _hasQueryParams(string)
    const joinQueryString = _joinQueries(string)
    const split = _split(string)
    const replaceAll = _replaceAll(string)
    return {
        split,
        replaceAll,
        hasQueryParams,
        joinQueryString,
    }
}
