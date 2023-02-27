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
            page: state?.page || 1,
            pageSize,
            paginationSize,
            onPagingUpdate: (_state) => {
                state = _state
            },
        })

        expect(state.isFirstPage).toBeTruthy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        updatePage(1)

        expect(state.isFirstPage).toBeTruthy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        updatePage(2)

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        console.log(state)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(state.pages).toEqual([6, 7, 8, 9, 10])

        nextPage()

        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeTruthy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeTruthy()
        expect(state.pages).toEqual([11])

        updatePage(5)
        console.log(state)
    })
})
