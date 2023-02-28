import { Guards } from '../../../Guards'
import { Types } from '../../Types'

const getCount = (itemsLength: number, pageSize: number) => Math.ceil(itemsLength / pageSize)

export const paging = (options: Types.Array.Paging.Options) => {
    const { itemsCount, page = 1, pageSize, paginationSize, onPagingUpdate } = options

    const state: Types.Array.Paging.State = {
        page: 1,
        isFirstPage: true,
        isLastPage: false,
        _pagingPage: 1,
        isFirstPagingPage: true,
        isLastPagingPage: false,
        _pagingPages: [],
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

        state._pagingPages = paginPages
    }

    generatePagingPages()

    const onPagingUpdateCallback = () => {
        if (Guards.isFunc(onPagingUpdate)) {
            onPagingUpdate(state)
        }
    }

    const getPaginationPagesCount = () => {
        return state._pagingPages.length
    }

    const getIsFirstPaginationPage = () => {
        return state._pagingPage === 1
    }
    const getIsLastPaginationPage = () => {
        return state._pagingPage === getPaginationPagesCount()
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
            state._pagingPage = pagingPage
            state.pages = state._pagingPages[state._pagingPage - 1]
            state.isFirstPagingPage = getIsFirstPaginationPage()
            state.isLastPagingPage = getIsLastPaginationPage()
        }
        onPagingUpdateCallback()
    }

    const nextPaginationPage = () => {
        updatePaginationPage(state._pagingPage + 1)
    }

    const prevPaginationPage = () => {
        updatePaginationPage(state._pagingPage - 1)
    }

    const updatePage = (page: number) => {
        const count = getItemsPagesCount()
        const canUpdate = page >= 1 && count >= page

        if (canUpdate) {
            state.page = page
            state.isFirstPage = getIsFirstItemsPage()
            state.isLastPage = getIsLastItemsPage()
            if (!state.pages.includes(page)) {
                const pagesIndex = state._pagingPages.findIndex((x) => x.includes(state.page))
                state._pagingPage = pagesIndex + 1
                state.pages = state._pagingPages[pagesIndex]
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

    updatePage(page)

    onPagingUpdateCallback()

    return {
        updatePage,
        nextPage,
        prevPage,
        nextPaginationPage,
        prevPaginationPage,
    }
}
