import { describe, test } from '@jest/globals'
import { $Array } from '../../src/Base'
import { createFakeUser } from '../mocks/create-fake-user'

const users1000000 = Array.from(Array(1000000).keys()).map((i) => createFakeUser(i + 1))

describe('Array paging perfomance', () => {
    const result = {}

    afterAll(() => {
        console.log(JSON.stringify(result, null, 2))
    })

    test('init test', () => {
        const pageSize = 21

        let t0 = performance.now()
        const { updatePage, nextPage, prevPage, nextPaginationPage, prevPaginationPage } = $Array(
            users1000000
        ).paging({
            page: 1,
            pageSize,
            paginationSize: 6,
            onUpdate() {},
        })
        let t1 = performance.now()
        result['creation'] = `${t1 - t0} ms`

        t0 = performance.now()
        updatePage(2)
        t1 = performance.now()
        result['1'] = `${t1 - t0} ms`

        t0 = performance.now()
        prevPage()
        t1 = performance.now()
        result['2'] = `${t1 - t0} ms`

        t0 = performance.now()
        prevPage()
        t1 = performance.now()
        result['3'] = `${t1 - t0} ms`

        t0 = performance.now()
        nextPage()
        t1 = performance.now()
        result['4'] = `${t1 - t0} ms`

        t0 = performance.now()
        nextPage()
        t1 = performance.now()
        result['5'] = `${t1 - t0} ms`

        t0 = performance.now()
        nextPage()
        t1 = performance.now()
        result['6'] = `${t1 - t0} ms`

        t0 = performance.now()
        nextPage()
        t1 = performance.now()
        result['7'] = `${t1 - t0} ms`

        t0 = performance.now()
        nextPage()
        t1 = performance.now()
        result['8'] = `${t1 - t0} ms`

        t0 = performance.now()
        nextPage()
        t1 = performance.now()
        result['9'] = `${t1 - t0} ms`
    })
})
