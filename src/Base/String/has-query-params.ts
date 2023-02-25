const hasQueryParams =
    <S extends string>(string: S) =>
    () => {
        return `${string}`.indexOf('?') !== -1
    }

export default hasQueryParams
