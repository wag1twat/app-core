import hasQueryParams from './has-query-params'

const joinQueries =
    <S extends string>(string: S) =>
    <Q extends string>(
        queryString: Q
    ): S extends `${string}?${string}` ? `${S}&${Q}` : `${S}?${Q}` => {
        const isHasQueryParams = hasQueryParams(string)()
        return isHasQueryParams ? `${string}&${queryString}` : (`${string}?${queryString}` as any)
    }

export default joinQueries
