import { describe, test, expect } from '@jest/globals'
import { act, renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { usePaging, PagingProps } from '../../src/hooks/usePaging/usePaging'

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

describe('use paging', () => {
    const hook = renderHook(
        (props: PagingProps) => {
            return usePaging({
                pageSize: 5,
                paginationSize: 6,
                itemsCount: 53,
                onMount: true,
            })
        },
        {
            wrapper,
        }
    )

    test('rerender page 1', () => {
        expect(hook.result.current?.page).toBe(1)
        expect(hook.result.current?.isFirstPage).toBeTruthy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.updatePage(2)
        })

        expect(hook.result.current?.page).toBe(2)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.updatePage(3)
        })

        expect(hook.result.current?.page).toBe(3)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(4)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(5)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(6)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.prevPage()
        })

        expect(hook.result.current?.page).toBe(5)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(6)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.updatePage(34)
        })

        expect(hook.result.current?.page).toBe(6)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.nextPage()
        })

        expect(hook.result.current?.page).toBe(7)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeFalsy()
        expect(hook.result.current?.isLastPagingPage).toBeTruthy()
        expect(hook.result.current?.pages?.length).toBe(5)

        act(() => {
            hook.result.current.updatePage(1)
        })

        expect(hook.result.current?.page).toBe(1)
        expect(hook.result.current?.isFirstPage).toBeTruthy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.result.current.updatePage(5)
        })

        expect(hook.result.current?.page).toBe(5)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)

        act(() => {
            hook.rerender({
                pageSize: 10,
                paginationSize: 6,
                itemsCount: 56,
                onMount: true,
            })
        })

        expect(hook.result.current?.page).toBe(5)
        expect(hook.result.current?.isFirstPage).toBeFalsy()
        expect(hook.result.current?.isLastPage).toBeFalsy()
        expect(hook.result.current?.isFirstPagingPage).toBeTruthy()
        expect(hook.result.current?.isLastPagingPage).toBeFalsy()
        expect(hook.result.current?.pages?.length).toBe(6)
    })
})
