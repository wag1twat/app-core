import { Types } from '../../Types'
import { Guards } from '../../../Guards'
import getXPath from '../../Object/get-xpath'
import getCompareFunction from './get-compare-function'

const createSort = <T extends any[]>(collection: T) => {
    return <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
        options: Types.Array.Sort.Options<T, XPath>
    ) => {
        let called: boolean = false

        const { field, order, orders, onMount = true, onSortUpdate } = options

        const state: Types.Array.Sort.State<T> = {
            collection: collection.slice() as T,
            order: order ? order : Types.Array.Sort.defaultOrder,
            orders: orders ? orders : Types.Array.Sort.defaultOrders,
            field: field ? field : undefined,
        }

        //callbacks
        const onSortUpdateCallback = () => {
            if (Guards.isFunc(onSortUpdate)) {
                onSortUpdate(state)
            }
        }
        // utilities
        const getValue = (item: Types.Array.Of<T>) => {
            if (Guards.isString(state.field)) {
                return getXPath(item)(state.field)
            }
            if (Guards.isObject(state.field)) {
                return state.field.handler(getXPath(item)(state.field.xpath))
            }
            return item
        }

        const cleanup = () => {
            state.field = field ? field : undefined
            state.order = order ? order : Types.Array.Sort.defaultOrder
            state.orders = orders ? orders : Types.Array.Sort.defaultOrders
            state.collection = collection.slice() as T
            onSortUpdateCallback()
        }

        const setField = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            field: Types.Array.Sort.Field<T, XPath> | undefined
        ) => {
            if (!Guards.isUndefined(field)) {
                state.field = field
            }
        }

        const setOrder = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            field: Types.Array.Sort.Field<T, XPath> | undefined,
            noUpdateOrderFalsyEqualXPath: boolean
        ) => {
            let is: boolean = false

            if (noUpdateOrderFalsyEqualXPath) {
                if (Guards.isString(state.field) && Guards.isString(field)) {
                    if (state.field === field) {
                        is = true && called
                    }
                } else if (Guards.isString(state.field) && Guards.isObject(field)) {
                    if (state.field === field.xpath) {
                        is = true && called
                    }
                } else if (Guards.isObject(state.field) && Guards.isString(field)) {
                    if (state.field.xpath === field) {
                        is = true && called
                    }
                } else if (Guards.isObject(state.field) && Guards.isObject(field)) {
                    if (state.field.xpath === field.xpath) {
                        is = true && called
                    }
                }
            } else {
                is = true && called
            }

            if (is) {
                const lastOrderIndex = state.orders.length - 1
                const currentOrderIndex = state.orders.indexOf(state.order)
                const nextOrderIndex = currentOrderIndex + 1
                state.order =
                    nextOrderIndex <= lastOrderIndex
                        ? state.orders[nextOrderIndex]
                        : state.orders[0]
            }
        }

        const update = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            options: Types.Array.Sort.UpdateOptions<T, XPath> = {}
        ) => {
            const { field, noUpdateOrderFalsyEqualXPath = false } = options

            setOrder(field, noUpdateOrderFalsyEqualXPath)

            setField(field)

            if (state.order === 'default') {
                state.collection = collection.slice() as T
                onSortUpdateCallback()
            } else {
                state.collection = (state.collection.slice() as T).sort((l, r) =>
                    getCompareFunction(
                        state.order as Exclude<Types.Array.Sort.Order, 'default'>,
                        getValue(l),
                        getValue(r)
                    )
                )
                onSortUpdateCallback()
            }
        }

        if (!called && onMount) {
            update({
                field,
            })
            called = true
        }

        return {
            cleanup,
            update,
        }
    }
}

export { createSort }
