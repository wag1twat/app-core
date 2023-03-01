const nullables = {
    ['null:number']: (_l: null, _r: number) => {
        return 1
    },
    ['number:null']: (_l: number, _r: null) => {
        return -1
    },
    ['null:string']: (_l: null, _r: string) => {
        return 1
    },
    ['string:null']: (_l: string, _r: null) => {
        return -1
    },
    ['null:boolean']: (_l: null, _r: boolean) => {
        return 1
    },
    ['boolean:null']: (_l: boolean, _r: null) => {
        return -1
    },
} as const

const orders = {
    ASC: Object.assign(
        {
            ['number:number']: (l: number, r: number) => {
                return l - r
            },
            ['string:string']: (l: string, r: string) => {
                return l.localeCompare(r)
            },
            ['boolean:boolean']: (l: boolean, r: boolean) => {
                return l > r ? 1 : -1
            },
        },
        nullables
    ),
    DESC: Object.assign(
        {
            ['number:number']: (l: number, r: number) => {
                return r - l
            },
            ['string:string']: (l: string, r: string) => {
                return r.localeCompare(l)
            },
            ['boolean:boolean']: (l: boolean, r: boolean) => {
                return r > l ? 1 : -1
            },
        },
        nullables
    ),
} as const

type OrdersKeys = keyof (typeof orders)['ASC'] | keyof (typeof orders)['DESC']

export type { OrdersKeys }
export default orders
