import React from 'react'
import { deepEqual, $Array, Types } from '../Base'

type ArrayPagingProps<T extends any[]> = Omit<
    Types.Array.CreatePaging.Options<T>,
    'onPagingUpdate' | 'onCollectionUpdate'
> & {
    collection: T
}
type ArrayPaging<T extends any[]> = Types.Array.Paging.PagingMethods &
    Partial<
        Types.Array.Paging.State & {
            collection: T
        }
    >

const useArrayPaging = <T extends any[]>(options: ArrayPagingProps<T>): ArrayPaging<T> => {
    const { startsWith, pageSize, paginationSize, onMount, collection } = options

    const collectionRef = React.useRef(collection)

    const [pagingState, onPagingUpdate] = React.useState<Types.Array.Paging.State>()

    const [nextCollection, onCollectionUpdate] = React.useState<T>()

    if (!deepEqual(collectionRef.current, collection)) {
        collectionRef.current = collection
    }

    const functions = React.useMemo(() => {
        return $Array(collectionRef.current).paging({
            startsWith,
            pageSize,
            paginationSize,
            onMount,
            onPagingUpdate: (nextState) =>
                onPagingUpdate((prevState) =>
                    !deepEqual(prevState, nextState) ? nextState : prevState
                ),
            onCollectionUpdate: (nextCollection) =>
                onCollectionUpdate((prevCollection) =>
                    !deepEqual(prevCollection, nextCollection) ? nextCollection : prevCollection
                ),
        })
    }, [collectionRef.current, startsWith, pageSize, paginationSize, onMount])

    return {
        ...pagingState,
        ...functions,
        collection: nextCollection,
    }
}

export type { ArrayPagingProps, ArrayPaging }
export { useArrayPaging }
