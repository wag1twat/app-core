import { PagingState } from '../../Base/Array/Paging'
import React from 'react'
import { deepEqual, $Array } from '../../Base'
import { CollectionPagingResult, CollectionPagingProps } from './types'

const useCollectionPaging = <T extends unknown[]>(
    options: CollectionPagingProps<T>
): CollectionPagingResult<T> => {
    const { startsWith, pageSize, paginationSize, onMount } = options

    const collectionRef = React.useRef<T>(options.collection)

    const [pagingState, onPagingUpdate] = React.useState<Partial<PagingState>>({
        page: startsWith || 1,
    })

    const [collection, onCollectionUpdate] = React.useState<T>()

    if (!deepEqual(collectionRef.current, options.collection)) {
        collectionRef.current = options.collection
    }

    const functions = React.useMemo(() => {
        const { nextPage, nextPagingPage, prevPage, prevPagingPage, updatePage } = $Array(
            collectionRef.current
        ).paging({
            startsWith: pagingState?.page,
            pageSize,
            paginationSize,
            onMount,
            onPagingUpdate: (nextState) =>
                onPagingUpdate((prevState) =>
                    !deepEqual(prevState, nextState) ? { ...prevState, ...nextState } : prevState
                ),
            onCollectionUpdate: (nextCollection) =>
                onCollectionUpdate((prevCollection) =>
                    !deepEqual(prevCollection, nextCollection) ? nextCollection : prevCollection
                ),
        })

        return { nextPage, nextPagingPage, prevPage, prevPagingPage, updatePage }
    }, [collectionRef.current, pagingState?.page, pageSize, paginationSize, onMount])

    return {
        ...functions,
        ...pagingState,
        collection,
    }
}

export { useCollectionPaging }
