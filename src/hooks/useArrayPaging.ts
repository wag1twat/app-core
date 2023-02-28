import React from 'react'
import { deepEqual, $Array, Types } from '../Base'

interface ArrayPagingProps<T extends any> {
    pageSize: number
    paginationSize: number
    items: T[] | undefined
}

interface ArrayPaging<T extends any> extends Types.Array.PagingCollection.State<T[]> {
    updatePage: (page: number) => void
    nextPage: () => void
    prevPage: () => void
    nextPaginationPage: () => void
    prevPaginationPage: () => void
}

const useArrayPaging = <T extends any>(props: ArrayPagingProps<T>): ArrayPaging<T> => {
    const { pageSize, paginationSize, items = [] } = props

    const itemsRef = React.useRef<T[]>(items)

    const [state, setState] = React.useState<Types.Array.PagingCollection.State<T[]>>()

    if (!deepEqual(itemsRef.current, items)) {
        itemsRef.current = items
    }

    const functions = React.useMemo(() => {
        return $Array(itemsRef.current).paging({
            page: state?.page,
            pageSize,
            paginationSize,
            onUpdate: (properties) => {
                if (!deepEqual(state, properties)) {
                    setState(() => properties)
                }
            },
        })
    }, [itemsRef.current, state?.page])

    return Object.assign(state || ({} as Types.Array.PagingCollection.State<T[]>), functions)
}

export type { ArrayPagingProps, ArrayPaging }
export { useArrayPaging }
