import { hasQueryParams as _hasQueryParams } from './has-query-params'
import { joinQueries as _joinQueries } from './join-queries'
import { replaceAll as _replaceAll } from './replace-all'
import { split as _split } from './split'

export function $String<S extends string>(string: S) {
    return {
        split: <Separator extends string | RegExp>(
            separator: Separator,
            limit?: number | undefined
        ) => _split(string)(separator, limit),
        replaceAll: <Separator extends string, P extends object>(separator: Separator, p: P) =>
            _replaceAll(string)(separator, p),
        hasQueryParams: () => _hasQueryParams(string),
        joinQueries: <Q extends string>(queries: Q) => _joinQueries(string)(queries),
    }
}
