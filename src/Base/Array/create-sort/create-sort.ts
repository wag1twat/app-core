import { Types } from '../../Types'
import { Guards } from '../../../Guards'
import getXPath from '../../Object/get-xpath'
import getCompareFunction from './get-compare-function'

const createSort =
    <T extends any[]>(collection: T) =>
    <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
        options: Types.Array.Sort.Options<T, XPath>
    ) => {
        let called: boolean = false

        const { field, order, orders, onUpdate } = options

        const state: Types.Array.Sort.State<T> = {
            _collection: collection.slice() as T,
            _order: order ? order : Types.Array.Sort.defaultOrder,
            _orders: orders ? orders : Types.Array.Sort.defaultOrders,
            _field: field ? field : undefined,
        }

        //callbacks
        const onUpdateCallback = () => {
            if (Guards.isFunc(onUpdate)) {
                onUpdate(state)
            }
        }
        // utilities
        const getValue = (item: Types.Array.Of<T>) => {
            if (Guards.isString(state._field)) {
                return getXPath(item)(state._field)
            }
            if (Guards.isObject(state._field)) {
                return state._field.handler(getXPath(item)(state._field.xpath))
            }
            return item
        }

        const cleanup = () => {
            state._field = field ? field : undefined
            state._order = order ? order : Types.Array.Sort.defaultOrder
            state._orders = orders ? orders : Types.Array.Sort.defaultOrders
            state._collection = collection.slice() as T
            onUpdateCallback()
        }

        const setField = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            field: Types.Array.Sort.Field<T, XPath> | undefined
        ) => {
            if (!Guards.isUndefined(field)) {
                state._field = field
            }
        }

        const setOrder = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            field: Types.Array.Sort.Field<T, XPath> | undefined,
            noUpdateOrderFalsyEqualXPath: boolean
        ) => {
            let is: boolean = false

            if (noUpdateOrderFalsyEqualXPath) {
                if (Guards.isString(state._field) && Guards.isString(field)) {
                    if (state._field === field) {
                        is = true && called
                    }
                } else if (Guards.isString(state._field) && Guards.isObject(field)) {
                    if (state._field === field.xpath) {
                        is = true && called
                    }
                } else if (Guards.isObject(state._field) && Guards.isString(field)) {
                    if (state._field.xpath === field) {
                        is = true && called
                    }
                } else if (Guards.isObject(state._field) && Guards.isObject(field)) {
                    if (state._field.xpath === field.xpath) {
                        is = true && called
                    }
                }
            } else {
                is = true && called
            }

            if (is) {
                const lastOrderIndex = state._orders.length - 1
                const currentOrderIndex = state._orders.indexOf(state._order)
                const nextOrderIndex = currentOrderIndex + 1
                state._order =
                    nextOrderIndex <= lastOrderIndex
                        ? state._orders[nextOrderIndex]
                        : state._orders[0]
            }
        }

        const update = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            options: Types.Array.Sort.UpdateOptions<T, XPath> = {}
        ) => {
            const { field, noUpdateOrderFalsyEqualXPath = false } = options

            setOrder(field, noUpdateOrderFalsyEqualXPath)

            setField(field)

            if (state._order === 'default') {
                state._collection = collection.slice() as T
                onUpdateCallback()
            } else {
                state._collection = (state._collection.slice() as T).sort((l, r) =>
                    getCompareFunction(
                        state._order as Exclude<Types.Array.Sort.Order, 'default'>,
                        getValue(l),
                        getValue(r)
                    )
                )
                onUpdateCallback()
            }
        }

        if (!called) {
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

export { createSort }
