import { describe, test } from '@jest/globals'
import { $Array, Types } from '../src/Base'
import todos from './mocks/200-todos'

describe('Array paging', () => {
    test('init test', () => {
        const pageSize = 21
        let state!: Types.Array.PagingCollection.State<typeof todos>

        const { setPage, nextPage, prevPage, nextPaginationPage, prevPaginationPage } = $Array(
            todos
        ).paging({
            pageSize,
            paginationSize: 6,
            onUpdate(_state) {
                state = _state
            },
        })

        expect(state._page).toBe(1)
        expect(state._isFirstPage).toBeTruthy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        prevPage()
        expect(state._isFirstPage).toBeTruthy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        setPage(2)
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        nextPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        nextPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        nextPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        nextPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        nextPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        nextPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        prevPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeFalsy()
        expect(state._isLastPaginationPage).toBeTruthy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        prevPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )

        prevPage()
        expect(state._isFirstPage).toBeFalsy()
        expect(state._isLastPage).toBeFalsy()
        expect(state._isFirstPaginationPage).toBeTruthy()
        expect(state._isLastPaginationPage).toBeFalsy()
        expect(state._collection).toStrictEqual(
            todos.slice(pageSize * (state._page - 1), pageSize * state._page)
        )
    })
})
