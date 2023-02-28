import { Guards } from '../../../Guards'
import { Types } from '../../Types'

const getCount = (itemsLength: number, pageSize: number) => Math.ceil(itemsLength / pageSize)

export const paging = (options: Types.Array.Paging.Options): Types.Array.Paging.PagingMethods => {
    const {
        itemsCount,
        startsWith,
        pageSize,
        paginationSize,
        onMount = true,
        onPagingUpdate,
    } = options

    let _pagingPage: number = 1
    let _pagingPages: number[][] = []

    const state: Types.Array.Paging.State = {
        page: startsWith || 1,
        isFirstPage: true,
        isLastPage: false,
        isFirstPagingPage: true,
        isLastPagingPage: false,
        pages: [],
    }

    const getItemsPagesCount = () => {
        return getCount(itemsCount, pageSize)
    }

    const generatePagingPages = () => {
        const ofCount = Array.from(Array(getItemsPagesCount()).keys()).map((page) => page + 1)

        const paginPages = []

        for (let i = 0; i < Math.ceil(ofCount.length / paginationSize); i++) {
            paginPages[i] = ofCount.slice(i * paginationSize, i * paginationSize + paginationSize)
        }

        _pagingPages = paginPages
    }

    generatePagingPages()

    const onPagingUpdateCallback = () => {
        if (Guards.isFunc(onPagingUpdate)) {
            onPagingUpdate(state)
        }
    }

    const getPaginationPagesCount = () => {
        return _pagingPages.length
    }

    const getIsFirstPaginationPage = () => {
        return _pagingPage === 1
    }
    const getIsLastPaginationPage = () => {
        return _pagingPage === getPaginationPagesCount()
    }
    const getIsFirstItemsPage = () => {
        return state.page === 1
    }
    const getIsLastItemsPage = () => {
        return state.page === getItemsPagesCount()
    }

    const updatePaginationPage = (pagingPage: number) => {
        const count = getPaginationPagesCount()
        const canUpdate = pagingPage >= 1 && count >= pagingPage
        if (canUpdate) {
            _pagingPage = pagingPage
            state.pages = _pagingPages[_pagingPage - 1]
            state.isFirstPagingPage = getIsFirstPaginationPage()
            state.isLastPagingPage = getIsLastPaginationPage()
        }
        onPagingUpdateCallback()
    }

    const nextPaginationPage = () => {
        updatePaginationPage(_pagingPage + 1)
    }

    const prevPaginationPage = () => {
        updatePaginationPage(_pagingPage - 1)
    }

    const updatePage = (page: number) => {
        const count = getItemsPagesCount()
        const canUpdate = page >= 1 && count >= page

        if (canUpdate) {
            state.page = page
            state.isFirstPage = getIsFirstItemsPage()
            state.isLastPage = getIsLastItemsPage()
            if (!state.pages.includes(page)) {
                const pagesIndex = _pagingPages.findIndex((x) => x.includes(state.page))
                _pagingPage = pagesIndex + 1
                state.pages = _pagingPages[pagesIndex]
                state.isFirstPagingPage = getIsFirstPaginationPage()
                state.isLastPagingPage = getIsLastPaginationPage()
            }
        }
        onPagingUpdateCallback()
    }

    const nextPage = () => {
        updatePage(state.page + 1)
    }

    const prevPage = () => {
        updatePage(state.page - 1)
    }

    if (onMount) {
        updatePage(state.page)
        onPagingUpdateCallback()
    }

    return {
        updatePage,
        nextPage,
        prevPage,
        nextPaginationPage,
        prevPaginationPage,
    }
}
