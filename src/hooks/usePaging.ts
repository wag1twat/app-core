import React from 'react'
import { deepEqual, Types } from '../Base'
import { paging } from '../Base/Array/create-paging'

interface PagingProps {
    pageSize: number
    paginationSize: number
    itemsCount: number
}

interface Pagign extends Types.Array.Paging.State {
    updatePage: (page: number) => void
    nextPage: () => void
    prevPage: () => void
    nextPaginationPage: () => void
    prevPaginationPage: () => void
}

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
