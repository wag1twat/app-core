import { describe, test, expect } from '@jest/globals'
import { $Array, Types } from '../../src/Base'
import users from '../mocks/users'

const createFake = (id: number) => {
    return {
        id,
        isRegistry: false,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677',
            },
        },
    }
}

const users1000000 = Array.from(Array(1000000).keys()).map((i) => createFake(i))

describe('array-sort-perfomance', () => {
    const result = {}

    afterAll(() => {
        console.log(JSON.stringify(result, null, 2))
    })

    test('default sort 1000000', () => {
        let t0 = performance.now()
        users1000000.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat))
        let t1 = performance.now()
        result['native sort: 1'] = t1 - t0

        t0 = performance.now()
        users1000000.sort((a, b) => b.address.geo.lat.localeCompare(a.address.geo.lat))
        t1 = performance.now()
        result['native sort: 2'] = t1 - t0
    })
    test('$Array sort 1000000', () => {
        let t0 = performance.now()
        let order!: Types.Array.Sort.Order
        const array = $Array(users1000000).sort({
            field: 'address.geo.lat',
            order: 'ASC',
            orders: ['ASC', 'DESC', 'default'],
            onUpdate(state) {
                order = state._order
            },
        })
        let t1 = performance.now()
        result[`${order} 0 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 1 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 2 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 3 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 4 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 5 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 6 $Array sort`] = `${Math.ceil(t1 - t0)} ms`

        t0 = performance.now()
        array.update()
        t1 = performance.now()
        result[`${order} 7 $Array sort`] = `${Math.ceil(t1 - t0)} ms`
    })
})
