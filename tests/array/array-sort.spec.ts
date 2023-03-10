import { describe, test, expect } from '@jest/globals'
import { $Array } from '../../src/Base/Array'
import users from '../mocks/10-users'
import { Guards } from '../../src/Guards'
import { Path } from '../../src/Base/types'
import { SortField, SortOrder } from '../../src/Base/Array/CollectionSort'

describe('Array sort', () => {
    const orders = ['ASC', 'DESC'] as const
    const order = 'ASC' as const

    let _collection: typeof users
    let _field: SortField<typeof users, Path<(typeof users)[number]>>
    let _order: SortOrder
    let _orders: SortOrder[]

    const { update } = $Array(users).sort({
        field: {
            xpath: 'id',
            handler: (item) => item,
        },
        order: order,
        orders: ['ASC', 'DESC'],
        onSortUpdate: (state) => {
            _collection = state.collection
            // @ts-ignore
            _field = state.field
            _order = state.order
            _orders = state.orders
        },
    })
    test('init test', () => {
        expect(_collection).toEqual(users)
        expect(_order).toBe(order)
        expect(_orders).toEqual(orders)

        if (Guards.isString(_field)) {
            expect(_field).toBe('id')
        }

        if (Guards.isObject(_field)) {
            expect(_field.xpath).toBe('id')
            expect(_field.handler).toBeInstanceOf(Function)
        }
    })
    test('update test [DESC]', () => {
        update({
            field: {
                xpath: 'id',
                handler: (item) => item,
            },
        })

        expect(_order).toBe('DESC')
        expect(_collection[0].id).toBe(10)
        expect(_collection[_collection.length - 1].id).toBe(1)
        expect(_collection[3].id).toBe(7)
        expect(_collection[5].id).toBe(5)
        expect(_collection[7].id).toBe(3)
    })
    test('update test [equalUpdate]', () => {
        const companyHandler = (item: any) => item?.name
        update({
            field: {
                xpath: 'company',
                handler: companyHandler,
            },
        })

        expect(_order).toBe('ASC')
        expect(_collection[0].company.name).toBe('Considine-Lockman')
        expect(_collection[1].company.name).toBe('Deckow-Crist')
        expect(_collection[2].company.name).toBe('Hoeger LLC')
        expect(_collection[3].company.name).toBe('Johns Group')
        expect(_collection[4].company.name).toBe('Keebler LLC')

        update({
            field: {
                xpath: 'company',
                handler: companyHandler,
            },
        })

        expect(_order).toBe('DESC')
        expect(_collection[0].company.name).toBe('Yost and Sons')
        expect(_collection[1].company.name).toBe('Romaguera-Jacobson')
        expect(_collection[2].company.name).toBe('Romaguera-Crona')
        expect(_collection[3].company.name).toBe('Robel-Corkery')
        expect(_collection[4].company.name).toBe('Keebler LLC')

        const usernameHandler = (item: any) => item

        update({
            field: {
                xpath: 'username',
                handler: usernameHandler,
            },
        })

        expect(_order).toBe('ASC')
        expect(_collection[0].username).toBe('Antonette')
        expect(_collection[1].username).toBe('Bret')
        expect(_collection[2].username).toBe('Delphine')
        expect(_collection[3].username).toBe('Elwyn.Skiles')
        expect(_collection[4].username).toBe('Kamren')

        update({
            field: {
                xpath: 'username',
                handler: usernameHandler,
            },
        })

        expect(_order).toBe('DESC')
        expect(_collection[0].username).toBe('Samantha')
        expect(_collection[1].username).toBe('Moriah.Stanton')
        expect(_collection[2].username).toBe('Maxime_Nienow')
        expect(_collection[3].username).toBe('Leopoldo_Corkery')
        expect(_collection[4].username).toBe('Karianne')

        update({
            field: {
                xpath: 'company',
                handler: (item) => item?.name,
            },
        })

        expect(_order).toBe('ASC')
        expect(_collection[0].company.name).toBe('Considine-Lockman')
        expect(_collection[1].company.name).toBe('Deckow-Crist')
        expect(_collection[2].company.name).toBe('Hoeger LLC')
        expect(_collection[3].company.name).toBe('Johns Group')
        expect(_collection[4].company.name).toBe('Keebler LLC')
    })

    test('test init array of numbers', () => {
        const array = [3, 54, 77, null, 91293, 1, undefined, 0, 111]
        const asked = [0, 1, 3, 54, 77, 111, 91293, null, undefined]
        const desced = [91293, 111, 77, 54, 3, 1, 0, null, undefined]
        let _collection!: number[]
        let _order!: SortOrder
        let _orders!: SortOrder[]

        const { update, cleanup } = $Array(array).sort({
            orders: ['ASC', 'DESC', 'default'],
            order: 'ASC',
            onSortUpdate(state) {
                // @ts-ignore
                _collection = state.collection
                _order = state.order
                _orders = state.orders
            },
        })

        expect(_orders).toEqual(['ASC', 'DESC', 'default'])

        expect(_order).toBe('ASC')
        expect(_collection).toEqual(asked)

        update()

        expect(_order).toBe('DESC')
        expect(_collection).toEqual(desced)

        update()

        expect(_order).toBe('default')
        expect(_collection).toEqual(array)

        update()

        expect(_order).toBe('ASC')
        expect(_collection).toEqual(asked)

        update()

        expect(_order).toBe('DESC')
        expect(_collection).toEqual(desced)
    })
    test('update test array of strings', () => {
        const array = [
            'Bret',
            'Antonette',
            'Samantha',
            'Karianne',
            'Kamren',
            'Leopoldo_Corkery',
            'Elwyn.Skiles',
            undefined,
            'Maxime_Nienow',
            'Delphine',
            'Moriah.Stanton',
        ]

        const asced = [
            'Antonette',
            'Bret',
            'Delphine',
            'Elwyn.Skiles',
            'Kamren',
            'Karianne',
            'Leopoldo_Corkery',
            'Maxime_Nienow',
            'Moriah.Stanton',
            'Samantha',
            undefined,
        ]

        const desced = [
            'Samantha',
            'Moriah.Stanton',
            'Maxime_Nienow',
            'Leopoldo_Corkery',
            'Karianne',
            'Kamren',
            'Elwyn.Skiles',
            'Delphine',
            'Bret',
            'Antonette',
            undefined,
        ]

        let _collection!: string[]
        let _order!: SortOrder
        let _orders!: SortOrder[]

        const { update, cleanup } = $Array(array).sort({
            orders: ['ASC', 'DESC', 'default'],
            order: 'ASC',
            onSortUpdate(state) {
                // @ts-ignore
                _collection = state.collection
                _order = state.order
                _orders = state.orders
            },
        })

        expect(_order).toBe('ASC')
        expect(_orders).toEqual(['ASC', 'DESC', 'default'])
        expect(_collection).toEqual(asced)

        update()

        expect(_order).toBe('DESC')
        expect(_collection).toEqual(desced)

        update()

        expect(_order).toBe('default')
        expect(_collection).toEqual(array)

        update()

        expect(_order).toBe('ASC')
        expect(_collection).toEqual(asced)

        update()

        expect(_order).toBe('DESC')
        expect(_collection).toEqual(desced)

        update()

        expect(_order).toBe('default')
        expect(_collection).toEqual(array)

        update()

        expect(_order).toBe('ASC')
        expect(_collection).toEqual(asced)

        cleanup()

        expect(_order).toBe('ASC')
        expect(_collection).toEqual(asced)
    })
})
