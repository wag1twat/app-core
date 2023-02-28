import { describe } from '@jest/globals'
import { Types } from '../src/Base'
import { paging } from '../src/Base/Array/create-paging'

describe('Paging', () => {
    test('init test', () => {
        let state!: Types.Array.Paging.State

        const itemsCount = 53
        const pageSize = 5
        const paginationSize = 5
        const { updatePage, nextPage, prevPage, nextPaginationPage, prevPaginationPage } = paging({
            itemsCount,
            page: 1,
            pageSize,
            paginationSize,
            onPagingUpdate: (_state) => {
                state = _state
            },
        })

        expect(state.page).toBe(1)
        expect(state.isFirstPage).toBeTruthy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.page).toBe(2)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.page).toBe(3)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.page).toBe(4)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.page).toBe(5)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.page).toBe(6)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.page).toBe(7)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.page).toBe(8)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.page).toBe(9)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.page).toBe(10)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.page).toBe(11)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeTruthy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeTruthy()
        expect(state.pages).toEqual([11])

        prevPage()

        expect(state.page).toBe(10)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        prevPage()

        expect(state.page).toBe(9)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        prevPage()

        expect(state.page).toBe(8)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        prevPage()

        expect(state.page).toBe(7)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        prevPage()

        expect(state.page).toBe(6)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        prevPage()

        expect(state.page).toBe(5)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state.page).toBe(4)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        updatePage(11)

        expect(state.page).toBe(11)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeTruthy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeTruthy()
        expect(state.pages).toEqual([11])

        updatePage(6)

        expect(state.page).toBe(6)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])
    })
    test('on mount', () => {
        let state!: Types.Array.Paging.State

        const itemsCount = 53
        const pageSize = 5
        const paginationSize = 5
        const { updatePage, nextPage, prevPage, nextPaginationPage, prevPaginationPage } = paging({
            itemsCount,
            page: 1,
            pageSize,
            paginationSize,
            onMount: false,
            onPagingUpdate: (_state) => {
                state = _state
            },
        })

        expect(state).toBeUndefined()

        updatePage(1)

        expect(state.page).toBe(1)
    })
})
