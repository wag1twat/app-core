import React from 'react'
import { $Array, deepEqual, Types } from '../Base'

interface ArraySortProps<
    T extends any[],
    XPath extends Types.Utility.JSONPath<Types.Array.Of<T>> = Types.Utility.JSONPath<
        Types.Array.Of<T>
    >
> extends Omit<Types.Array.Sort.Options<T, XPath>, 'onSortUpdate'> {
    collection: T
}
interface ArraySort<T extends any[]>
    extends Types.Array.Sort.SortMethods<T>,
        Partial<Types.Array.Sort.State<T>> {}

const useArraySort = <T extends any[], XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
    options: ArraySortProps<T, XPath>
): ArraySort<T> => {
    const { collection, order, orders, field } = options

    const collectionRef = React.useRef(collection)
    const ordersRef = React.useRef(orders)
    const fieldRef = React.useRef(field)

    const [sortState, onSortUpdate] = React.useState<Partial<Types.Array.Sort.State<T>>>({})

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
        return $Array(collectionRef.current).sort({
            order,
            orders: ordersRef.current,
            field: fieldRef.current,
            onSortUpdate: (nextState) =>
                onSortUpdate((prevState) =>
                    !deepEqual(prevState, nextState) ? { ...prevState, ...nextState } : prevState
                ),
        })
    }, [collectionRef.current, ordersRef.current, fieldRef.current, order])

    return {
        ...sortState,
        ...functions,
    }
}

export type { ArraySortProps, ArraySort }
export { useArraySort }
