import { Types } from '../../Types'
import orders, { OrdersKeys } from './orders'

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

const getCompareFunction = (order: Exclude<Types.Array.Sort.Order, 'default'>, l: any, r: any) => {
    return orders[order][`${retypeof[typeof l]}:${retypeof[typeof r]}` as OrdersKeys](
        l as never,
        r as never
    )
}

export default getCompareFunction
