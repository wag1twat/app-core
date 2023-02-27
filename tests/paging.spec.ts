import { describe } from '@jest/globals'
import { Types } from '../src/Base'
import { paging } from '../src/Base/Array/create-paging'

describe('Paging', () => {
    test('init test', () => {
        let state!: Types.Array.Paging.State

        const itemsCount = 53
        const pageSize = 10
        const paginationSize = 5
        const { setPage, nextPage, prevPage, nextPaginationPage, prevPaginationPage } = paging({
            itemsCount,
            pageSize,
            paginationSize,
            onPagingUpdate: (_state) => {
                state = _state
            },
        })

        expect(state._isFirstPage).toBeTruthy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        setPage(1)

        expect(state._isFirstPage).toBeTruthy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        setPage(2)

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeTruthy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._visiblePaginationPages).toEqual([6])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeTruthy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._visiblePaginationPages).toEqual([6])

        prevPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        prevPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        nextPage()

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        setPage(6)

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeTruthy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._visiblePaginationPages).toEqual([6])

        setPage(5)

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        setPage(3)

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        setPage(1)

        expect(state._isFirstPage).toBeTruthy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._visiblePaginationPages).toEqual([1, 2, 3, 4, 5])

        setPage(6)

        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeTruthy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._visiblePaginationPages).toEqual([6])
    })
})
