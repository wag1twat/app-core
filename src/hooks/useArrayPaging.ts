import React from 'react'
import { deepEqual, $Array, Types } from '../Base'

interface ArrayPagingProps<T extends any>
    extends Pick<Types.Array.Paging.Options, 'page' | 'pageSize' | 'paginationSize' | 'onMount'> {
    items: T[] | undefined
}

interface ArrayPaging<T extends any>
    extends Types.Array.CreatePaging.State<T[]>,
        Types.Array.Paging.PagingMethods {}

// TODO: onMount props
const useArrayPaging = <T extends any>(props: ArrayPagingProps<T>): ArrayPaging<T> => {
    const { pageSize, paginationSize, onMount = true, items = [] } = props

    const itemsRef = React.useRef<T[]>(items)
    const [state, setState] = React.useState<Types.Array.CreatePaging.State<T[]>>()

    if (!deepEqual(itemsRef.current, items)) {
        itemsRef.current = items
    }

    const functions = React.useMemo(() => {
        return $Array(itemsRef.current).paging({
            page: state?.page,
            pageSize,
            paginationSize,
            onMount,
            onPagingUpdate: (nextState) => {
                setState((prevState) => (!deepEqual(prevState, nextState) ? nextState : prevState))
            },
        })
    }, [pageSize, paginationSize, itemsRef.current])

    return Object.assign(state || ({} as Types.Array.CreatePaging.State<T[]>), functions)
}

export type { ArrayPagingProps, ArrayPaging }
export { useArrayPaging }
