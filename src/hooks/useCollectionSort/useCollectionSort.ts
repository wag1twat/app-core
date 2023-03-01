import React from 'react'
import { $Array, ArrayOf, deepEqual, JSONPath, SortState } from '../../Base'
import { CollectionSortProps, CollectionSortResult } from './types'

const useCollectionSort = <T extends any[], XPath extends JSONPath<ArrayOf<T>>>(
    options: CollectionSortProps<T, XPath>
): CollectionSortResult<T> => {
    const { collection, order, orders, field } = options

    const collectionRef = React.useRef(collection)
    const ordersRef = React.useRef(orders)
    const fieldRef = React.useRef(field)

    const [sortState, onSortUpdate] = React.useState<Partial<SortState<T>>>({})

    if (!deepEqual(collectionRef.current, collection)) {
        collectionRef.current = collection
    }
    if (!deepEqual(ordersRef.current, orders)) {
        ordersRef.current = orders
    }
    if (!deepEqual(fieldRef.current, field)) {
        fieldRef.current = field
    }

    const functions = React.useMemo(() => {
        const { update, cleanup } = $Array(collectionRef.current).sort({
            order,
            orders: ordersRef.current,
            field: fieldRef.current,
            onSortUpdate: (nextState) =>
                onSortUpdate((prevState) =>
                    !deepEqual(prevState, nextState) ? { ...prevState, ...nextState } : prevState
                ),
        })
        return { update, cleanup }
    }, [collectionRef.current, ordersRef.current, fieldRef.current, order])

    return {
        ...sortState,
        ...functions,
    }
}

export { useCollectionSort }
