import { describe } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'
import { CollectionSortProps, useCollectionSort } from '../../src/hooks'
import users from '../mocks/10-users.js'

describe('use array sort', () => {
    test('init test rerender', () => {
        const hook = renderHook((props: CollectionSortProps<typeof users>) => {
            return useCollectionSort({
                order: 'ASC',
                orders: ['ASC', 'DESC', 'default'],
                field: 'id',
                // @ts-ignore
                collection: users,
                ...props,
            })
        })

        expect(hook.result.current.cleanup).toBeDefined()
        expect(hook.result.current.update).toBeDefined()
        expect(hook.result.current.collection).toBeDefined()
        expect(hook.result.current.field).toBe('id')
        expect(hook.result.current.order).toBe('ASC')
        expect(hook.result.current.orders).toEqual(['ASC', 'DESC', 'default'])

        act(() => {
            hook.rerender({
                order: 'DESC',
                orders: ['ASC', 'DESC'],
                field: 'address.geo.lat',
                collection: users,
            })
        })

        expect(hook.result.current.cleanup).toBeDefined()
        expect(hook.result.current.update).toBeDefined()
        expect(hook.result.current.collection).toBeDefined()
        expect(hook.result.current.field).toBe('address.geo.lat')
        expect(hook.result.current.order).toBe('DESC')
        expect(hook.result.current.orders).toEqual(['ASC', 'DESC'])

        act(() => {
            hook.rerender({
                order: 'ASC',
                orders: ['ASC', 'DESC', 'default'],
                field: 'id',
                collection: users,
            })
        })

        expect(hook.result.current.cleanup).toBeDefined()
        expect(hook.result.current.update).toBeDefined()
        expect(hook.result.current.collection).toBeDefined()
        expect(hook.result.current.field).toBe('id')
        expect(hook.result.current.order).toBe('ASC')
        expect(hook.result.current.orders).toEqual(['ASC', 'DESC', 'default'])
    })
    test('sorting', () => {
        const hook = renderHook((props: CollectionSortProps<typeof users>) => {
            return useCollectionSort({
                order: 'ASC',
                orders: ['ASC', 'DESC', 'default'],
                field: 'id',
                // @ts-ignore
                collection: users,
                ...props,
            })
        })

        expect(hook.result.current.cleanup).toBeDefined()
        expect(hook.result.current.update).toBeDefined()
        expect(hook.result.current.collection).toBeDefined()
        expect(hook.result.current.field).toBe('id')
        expect(hook.result.current.order).toBe('ASC')
        expect(hook.result.current.orders).toEqual(['ASC', 'DESC', 'default'])

        expect(hook.result.current.collection?.[0].id).toBe(1)
        expect(hook.result.current.collection?.[1].id).toBe(2)
        expect(hook.result.current.collection?.[2].id).toBe(3)
        expect(hook.result.current.collection?.[3].id).toBe(4)
        expect(hook.result.current.collection?.[4].id).toBe(5)

        act(() => {
            hook.result.current.update()
        })

        expect(hook.result.current.order).toBe('DESC')

        expect(hook.result.current.collection?.[0].id).toBe(10)
        expect(hook.result.current.collection?.[1].id).toBe(9)
        expect(hook.result.current.collection?.[2].id).toBe(8)
        expect(hook.result.current.collection?.[3].id).toBe(7)
        expect(hook.result.current.collection?.[4].id).toBe(6)

        act(() => {
            hook.result.current.update()
        })

        expect(hook.result.current.order).toBe('default')

        expect(hook.result.current.collection?.[0].id).toBe(1)
        expect(hook.result.current.collection?.[1].id).toBe(2)
        expect(hook.result.current.collection?.[2].id).toBe(3)
        expect(hook.result.current.collection?.[3].id).toBe(4)
        expect(hook.result.current.collection?.[4].id).toBe(5)

        act(() => {
            hook.result.current.update()
        })

        expect(hook.result.current.order).toBe('ASC')

        expect(hook.result.current.collection?.[0].id).toBe(1)
        expect(hook.result.current.collection?.[1].id).toBe(2)
        expect(hook.result.current.collection?.[2].id).toBe(3)
        expect(hook.result.current.collection?.[3].id).toBe(4)
        expect(hook.result.current.collection?.[4].id).toBe(5)

        act(() => {
            hook.result.current.update({
                field: {
                    xpath: 'company',
                    handler: (item) => item?.name,
                },
            })
        })

        expect(hook.result.current.order).toBe('DESC')

        expect(hook.result.current.collection?.[0].company.name).toBe('Yost and Sons')
        expect(hook.result.current.collection?.[1].company.name).toBe('Romaguera-Jacobson')
        expect(hook.result.current.collection?.[2].company.name).toBe('Romaguera-Crona')
        expect(hook.result.current.collection?.[3].company.name).toBe('Robel-Corkery')
        expect(hook.result.current.collection?.[4].company.name).toBe('Keebler LLC')

        act(() => {
            hook.result.current.update({
                field: {
                    xpath: 'company',
                    handler: (item) => item?.name,
                },
            })
        })

        expect(hook.result.current.order).toBe('default')
        expect(hook.result.current.collection?.[0].company.name).toBe('Romaguera-Crona')
        expect(hook.result.current.collection?.[1].company.name).toBe('Deckow-Crist')
        expect(hook.result.current.collection?.[2].company.name).toBe('Romaguera-Jacobson')
        expect(hook.result.current.collection?.[3].company.name).toBe('Robel-Corkery')
        expect(hook.result.current.collection?.[4].company.name).toBe('Keebler LLC')

        act(() => {
            hook.result.current.update({
                field: {
                    xpath: 'company',
                    handler: (item) => item?.name,
                },
            })
        })

        expect(hook.result.current.order).toBe('ASC')
        expect(hook.result.current.collection?.[0].company.name).toBe('Considine-Lockman')
        expect(hook.result.current.collection?.[1].company.name).toBe('Deckow-Crist')
        expect(hook.result.current.collection?.[2].company.name).toBe('Hoeger LLC')
        expect(hook.result.current.collection?.[3].company.name).toBe('Johns Group')
        expect(hook.result.current.collection?.[4].company.name).toBe('Keebler LLC')

        act(() => {
            hook.result.current.update({
                field: {
                    xpath: 'company',
                    handler: (item) => item?.name,
                },
            })
        })

        expect(hook.result.current.order).toBe('DESC')

        expect(hook.result.current.collection?.[0].company.name).toBe('Yost and Sons')
        expect(hook.result.current.collection?.[1].company.name).toBe('Romaguera-Jacobson')
        expect(hook.result.current.collection?.[2].company.name).toBe('Romaguera-Crona')
        expect(hook.result.current.collection?.[3].company.name).toBe('Robel-Corkery')
        expect(hook.result.current.collection?.[4].company.name).toBe('Keebler LLC')

        act(() => {
            hook.result.current.update({
                field: 'isRegistry',
            })
        })

        expect(hook.result.current.order).toBe('default')
        expect(hook.result.current.collection?.[0].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[1].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[2].isRegistry).toBeTruthy()
        expect(hook.result.current.collection?.[3].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[4].isRegistry).toBeTruthy()

        act(() => {
            hook.result.current.update({
                field: 'isRegistry',
            })
        })

        expect(hook.result.current.order).toBe('ASC')
        expect(hook.result.current.collection?.[0].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[1].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[2].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[3].isRegistry).toBeFalsy()
        expect(hook.result.current.collection?.[4].isRegistry).toBeTruthy()

        act(() => {
            hook.result.current.update({
                field: 'isRegistry',
            })
        })

        expect(hook.result.current.order).toBe('DESC')
        expect(hook.result.current.collection?.[0].isRegistry).toBeTruthy()
        expect(hook.result.current.collection?.[1].isRegistry).toBeTruthy()
        expect(hook.result.current.collection?.[2].isRegistry).toBeTruthy()
        expect(hook.result.current.collection?.[3].isRegistry).toBeTruthy()
        expect(hook.result.current.collection?.[4].isRegistry).toBeTruthy()
    })
})
