import React from 'react'
import { deepEqual, Types } from '../Base'
import { paging } from '../Base/Array/create-paging'

interface PagingProps
    extends Pick<
        Types.Array.Paging.Options,
        'page' | 'pageSize' | 'paginationSize' | 'onMount' | 'itemsCount'
    > {}

interface Pagign extends Types.Array.Paging.State, Types.Array.Paging.PagingMethods {}

const usePaging = (options: PagingProps): Pagign => {
    const [state, setState] = React.useState<Types.Array.Paging.State>()

    const functions = React.useMemo(
        () =>
            paging({
                ...options,
                page: state?.page,
                onPagingUpdate(nextState) {
                    setState((prevState) =>
                        !deepEqual(prevState, nextState) ? nextState : prevState
                    )
                },
            }),
        [options.itemsCount, options.pageSize, options.paginationSize]
    )

    return Object.assign(state || ({} as Types.Array.Paging.State), functions)
}

export type { PagingProps, Pagign }
export { usePaging }
