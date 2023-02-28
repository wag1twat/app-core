import React from 'react'
import { deepEqual, Types } from '../Base'
import { paging } from '../Base/Array/create-paging'

type PagingProps = Omit<Types.Array.Paging.Options, 'onPagingUpdate'>
type Paging = Types.Array.Paging.PagingMethods & Partial<Types.Array.Paging.State>

const usePaging = (options: PagingProps): Paging => {
    const { pageSize, paginationSize, page, itemsCount, onMount } = options

    const [pagingState, onPagingUpdate] = React.useState<Types.Array.Paging.State>()

    const functions = React.useMemo(
        () =>
            paging({
                pageSize,
                paginationSize,
                page: page || pagingState?.page,
                itemsCount,
                onMount,
                onPagingUpdate: (nextState) =>
                    onPagingUpdate((prevState) =>
                        !deepEqual(prevState, nextState) ? nextState : prevState
                    ),
            }),
        [pageSize, paginationSize, pagingState?.page, page, itemsCount, onMount]
    )

    return {
        ...pagingState,
        ...functions,
    }
}

export type { PagingProps, Paging }
export { usePaging }
