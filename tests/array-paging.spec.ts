import { describe, test } from '@jest/globals'
import { $Array, Types } from '../src/Base'
import todos from './mocks/200-todos'

describe('Array paging', () => {
    test('init test', () => {
        const pageSize = 9
        let state!: Types.Array.CreatePaging.State
        let collection!: typeof todos

        const { updatePage, nextPage, prevPage, nextPaginationPage, prevPaginationPage } = $Array(
            todos
        ).paging({
            startsWith: 1,
            pageSize,
            paginationSize: 6,
            onPagingUpdate(_state) {
                state = _state
            },
            onCollectionUpdate(_collection) {
                collection = _collection
            },
        })

        expect(state.page).toBe(1)
        expect(state.isFirstPage).toBeTruthy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        prevPage()
        expect(state.isFirstPage).toBeTruthy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        updatePage(2)
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        nextPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        nextPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        nextPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        nextPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        nextPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        nextPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        prevPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeFalsy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        prevPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )

        prevPage()
        expect(state.isFirstPage).toBeFalsy()
        expect(state.isLastPage).toBeFalsy()
        expect(state.isFirstPagingPage).toBeTruthy()
        expect(state.isLastPagingPage).toBeFalsy()
        expect(collection).toStrictEqual(
            todos.slice(pageSize * (state.page - 1), pageSize * state.page)
        )
    })
})
