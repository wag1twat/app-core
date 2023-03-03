import React from 'react'
import { deepEqual } from '../../Base'
import { paging, PagingState } from '../../Base/Array/Paging'
import { PagingProps, PagingResult } from './types'

const usePaging = (options: PagingProps): PagingResult => {
    const { pageSize, paginationSize, startsWith, itemsCount, onMount } = options

    const [pagingState, onPagingUpdate] = React.useState<Partial<PagingState>>({
        page: startsWith || 1,
    })

    const functions = React.useMemo(() => {
        const { nextPage, nextPagingPage, prevPage, prevPagingPage, updatePage } = paging({
            pageSize,
            paginationSize,
            startsWith: pagingState?.page,
            itemsCount,
            onMount,
            onPagingUpdate: (nextState) =>
                onPagingUpdate((prevState) =>
                    !deepEqual(prevState, nextState) ? { ...prevState, ...nextState } : prevState
                ),
        })

        return { nextPage, nextPagingPage, prevPage, prevPagingPage, updatePage }
    }, [pageSize, paginationSize, pagingState?.page, itemsCount, onMount])

    return {
        ...pagingState,
        ...functions,
    }
}

export { usePaging }
