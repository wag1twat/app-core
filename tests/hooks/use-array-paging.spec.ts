import { describe, test, expect } from '@jest/globals'
import { act, renderHook, WrapperComponent } from '@testing-library/react-hooks'
import todos from '../mocks/200-todos'
import { useArrayPaging, ArrayPagingProps } from '../../src/hooks'
import React from 'react'

const wrapper = (props: any) => {
    const [counter, updateCounter] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            updateCounter((x) => x + 1)
        }, 50)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return React.createElement('div', props)
}

describe('use array paging', () => {
    const hook = renderHook(
        (props: ArrayPagingProps<any>) => {
            return useArrayPaging({
                pageSize: 6,
                paginationSize: 5,
                items: todos,
                ...(props as object),
            })
        },
        {
            wrapper,
        }
    )

    beforeEach(() => {
        hook.rerender({
            pageSize: 6,
            paginationSize: 5,
            items: [...todos],
        })
    })

    test('rerender page 1', () => {
        expect(hook.result.current?.page).toBe(1)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeTruthy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.updatePage(2)
        })

        expect(hook.result.current?.page).toBe(2)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.updatePage(3)
        })

        expect(hook.result.current?.page).toBe(3)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(4)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(5)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(6)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(2)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeFalsy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.prevPage()
        })

        expect(hook.result.current?.page).toBe(5)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(6)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(2)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeFalsy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)

        act(() => {
            hook.result.current.updatePage(34)
        })

        expect(hook.result.current?.page).toBe(34)
        expect(hook.result.current?.collection.length).toBe(2)
        expect(hook.result.current?._pagingPage).toBe(7)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeTruthy()
        expect(hook.result.current?.isFirstPagingPage).toBeFalsy()
        expect(hook.result.current?.isLastPagingPage).toBeTruthy()
        expect(hook.result.current?.pages.length).toBe(4)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(34)
        expect(hook.result.current?.collection.length).toBe(2)
        expect(hook.result.current?._pagingPage).toBe(7)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeTruthy()
        expect(hook.result.current?.isFirstPagingPage).toBeFalsy()
        expect(hook.result.current?.isLastPagingPage).toBeTruthy()
        expect(hook.result.current?.pages.length).toBe(4)

        act(() => {
            hook.result.current.updatePage(1)
        })

        expect(hook.result.current?.page).toBe(1)
        expect(hook.result.current?.collection.length).toBe(6)
        expect(hook.result.current?._pagingPage).toBe(1)
        expect(hook.result.current?._pagingPages.length).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeTruthy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages.length).toBe(5)
    })
})
