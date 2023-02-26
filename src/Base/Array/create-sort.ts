import { Types } from '../Types'
import { Guards } from '../../Guards'
import { $Object } from '../Object'

const createSort =
    <T extends any[]>(collection: T) =>
    <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
        options: Types.Array.Sort.Options<T, XPath>
    ) => {
        let called: boolean = false

        const { field, order, orders, onUpdate } = options

        const state: Types.Array.Sort.State<T> = {
            _collection: [] as unknown as T,
            _order: Types.Array.Sort.defaultOrder,
            _orders: Types.Array.Sort.defaultOrders,
            _field: undefined,
        }

        const onUpdateCallback = () => {
            if (Guards.isFunc(onUpdate)) {
                onUpdate(state)
            }
        }

        const install = () => {
            state._field = field ? field : undefined
            state._order = order ? order : Types.Array.Sort.defaultOrder
            state._orders = orders ? orders : Types.Array.Sort.defaultOrders
            state._collection = [...collection] as T
            onUpdateCallback()
        }

        const updateField = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            field: Types.Array.Sort.Field<T, XPath> | undefined
        ) => {
            if (!Guards.isUndefined(field)) {
                state._field = field
            }
        }

        const updateOrder = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
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

        const onDefaultOrder = () => {
            if (state._order === 'default') {
                state._collection = [...collection] as T

                onUpdateCallback()

                return true
            }
            return false
        }

        const update = <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            options: Types.Array.Sort.UpdateOptions<T, XPath> = {}
        ) => {
            const { field, noUpdateOrderFalsyEqualXPath = false } = options

            updateOrder(field, noUpdateOrderFalsyEqualXPath)

            updateField(field)

            if (!onDefaultOrder()) {
                const isAsc = state._order === 'ASC'
                const isStringField = Guards.isString(state._field)
                const isObjectField = Guards.isObject(state._field)

                state._collection = ([...state._collection] as T).sort((l, r) => {
                    let n = 0

                    if (isStringField) {
                        l = l[state._field]
                        r = r[state._field]
                    } else if (isObjectField) {
                        l = (state._field as Types.Array.Sort.FieldObject<T, XPath>).handler(
                            $Object(l).getXPath(
                                (state._field as Types.Array.Sort.FieldObject<T, XPath>).xpath
                            )
                        )
                        r = (state._field as Types.Array.Sort.FieldObject<T, XPath>).handler(
                            $Object(r).getXPath(
                                (state._field as Types.Array.Sort.FieldObject<T, XPath>).xpath
                            )
                        )
                    }

                    const stringsComparation = Types.Array.Sort.compareStrings(
                        isAsc,
                        Guards.isString(l),
                        Guards.isString(r),
                        l,
                        r
                    )

                    if (Guards.isNumber(stringsComparation)) {
                        n = stringsComparation
                    }

                    const numbersComparation = Types.Array.Sort.compareNumbers(
                        isAsc,
                        Guards.isNumber(l),
                        Guards.isNumber(r),
                        l,
                        r
                    )

                    if (Guards.isNumber(numbersComparation)) {
                        n = numbersComparation
                    }

                    const booleanComparation = Types.Array.Sort.compareBooleans(
                        isAsc,
                        Guards.isBoolean(l),
                        Guards.isBoolean(r),
                        l,
                        r
                    )

                    if (Guards.isNumber(booleanComparation)) {
                        n = booleanComparation
                    }

                    return n
                })

                onUpdateCallback()
            }
        }

        install()

        if (!called) {
            update({
                field,
            })
            called = true
        }

        return {
            cleanup: install,
            update,
        }
    }

export default createSort
