import { Types } from '../Types'
import { Guards } from '../../Guards'
import { $Object } from '../Object'
import getXPath from '../Object/get-xpath'

const createTypeMap  = (isAsc: boolean): Record<string, any> => {
    return {
        ['number:number']: (l: number, r: number) => {
            console.log(l, r)
            return isAsc ? l - r : r - l
        },
        ['undefined:number']: (l: undefined, r: number) => {
            console.log(l, r)
            return isAsc ? -1 : 1
        },
        ['number:undefined']: (l: number, r: undefined) => {
            console.log(l, r)
            return isAsc ? -1 : 1
        },
        ['string:string']: (l: string, r: string) => {
            return isAsc ? l.localeCompare(r) : r.localeCompare(l)
        },
        ['undefined:string']: (l: undefined, r: string) => {
            return isAsc ? -1 : 1
        },
        ['string:undefined']: (l: string, r: undefined) => {
            return isAsc ? 1 : -1
        },
        ['boolean:boolean']: (l: boolean, r: boolean) => {
            return isAsc ? l > r : r > l
        }
    }
}

const createSort =
    <T extends any[]>(collection: T) =>
    <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
        options: Types.Array.Sort.Options<T, XPath>
    ) => {
        let called: boolean = false

        const { field, order, orders, onUpdate } = options

        const state: Types.Array.Sort.State<T> = {
            _collection: collection,
            _order: order ? order : Types.Array.Sort.defaultOrder,
            _orders: orders ? orders : Types.Array.Sort.defaultOrders,
            _field: field ? field : undefined,
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
            state._collection = collection
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
                state._collection = collection

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

                const getter = (item: any) => {
                    if(isStringField) {
                        return item[state._field]
                    }
                    if(isObjectField) {
                        return (state._field as Types.Array.Sort.FieldObject<T, XPath>).handler(getXPath(item)((state._field as Types.Array.Sort.FieldObject<T, XPath>).xpath))
                    }
                    return item
                }

                const typeMap = createTypeMap(isAsc)

                state._collection = state._collection.sort((l, r) => {
                    let n = 0

                    l = getter(l)
                    r = getter(r)
                    
                    n = typeMap[`${typeof l}:${typeof r}`](l, r)

                    return n

                    // const stringsComparation = Types.Array.Sort.compareStrings(
                    //     isAsc,
                    //     Guards.isString(l),
                    //     Guards.isString(r),
                    //     l,
                    //     r
                    // )

                    // if (Guards.isNumber(stringsComparation)) {
                    //     n = stringsComparation
                    // }

                    // const numbersComparation = Types.Array.Sort.compareNumbers(
                    //     isAsc,
                    //     Guards.isNumber(l),
                    //     Guards.isNumber(r),
                    //     l,
                    //     r
                    // )

                    // if (Guards.isNumber(numbersComparation)) {
                    //     n = numbersComparation
                    // }

                    // const booleanComparation = Types.Array.Sort.compareBooleans(
                    //     isAsc,
                    //     Guards.isBoolean(l),
                    //     Guards.isBoolean(r),
                    //     l,
                    //     r
                    // )

                    // if (Guards.isNumber(booleanComparation)) {
                    //     n = booleanComparation
                    // }

                    // return n
                })

                onUpdateCallback()
            }
        }

        // install()

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