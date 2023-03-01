import orders, { OrdersKeys } from './orders'
import { SortOrder } from './types'

const retypeof = {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    undefined: 'null',
    object: 'null',
    bigint: 'null',
    symbol: 'null',
    function: 'null',
} as const

const getCompareFunction = (order: Exclude<SortOrder, 'default'>, l: any, r: any) => {
    return orders[order][`${retypeof[typeof l]}:${retypeof[typeof r]}` as OrdersKeys](
        l as never,
        r as never
    )
}

export default getCompareFunction
