import { Guards } from '../../../Guards'
import { Types } from '../../Types'

const getCount = (itemsLength: number, pageSize: number) => Math.ceil(itemsLength / pageSize)

export const paging = (options: Types.Array.Paging.Options) => {
    const { itemsCount, pageSize, paginationSize, onPagingUpdate } = options

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

    const onPagingUpdateCallback = () => {
        if (Guards.isFunc(onPagingUpdate)) {
            onPagingUpdate(state)
        }
    }

    const getPaginationPagesCount = () => {
        return getCount(state._pagingPages.length, paginationSize)
    }
    const getItemsPagesCount = () => {
        return getCount(itemsCount, pageSize)
    }

    const getVisiblePaginationPages = () => {
        return state._pagingPages.slice(
            (state._pagingPage - 1) * paginationSize,
            state._pagingPage * paginationSize
        )
    }

    const install = () => {
        state._pagingPages = Array.from(Array(getItemsPagesCount()).keys()).map((page) => page + 1)
        state.pages = getVisiblePaginationPages()
    }

    const getIsFirstPaginationPage = () => {
        return state._pagingPage === 1
    }
    const getIsLastPaginationPage = () => {
        return state._pagingPage === getPaginationPagesCount()
    }
    const getFirstVisiblePaginationPage = () => {
        return state.pages[0]
    }
    const getLastVisiblePaginationPage = () => {
        return state.pages[state.pages.length - 1]
    }
    const getIsFirstItemsPage = () => {
        return state.page === 1
    }
    const getIsLastItemsPage = () => {
        return state.page === getItemsPagesCount()
    }

    const nextPaginationPage = () => {
        const count = getPaginationPagesCount()
        const nextPaginationPage = state._pagingPage + 1
        const canUpdate = count >= nextPaginationPage
        if (canUpdate) {
            state._pagingPage = nextPaginationPage
            state.isFirstPagingPage = getIsFirstPaginationPage()
            state.isLastPagingPage = getIsLastPaginationPage()
            state.pages = getVisiblePaginationPages()
            onPagingUpdateCallback()
        }
    }

    const prevPaginationPage = () => {
        const prevPaginationPage = state._pagingPage - 1
        const canUpdate = prevPaginationPage >= 1
        if (canUpdate) {
            state._pagingPage = prevPaginationPage
            state.isFirstPagingPage = getIsFirstPaginationPage()
            state.isLastPagingPage = getIsLastPaginationPage()
            state.pages = getVisiblePaginationPages()
            onPagingUpdateCallback()
        }
    }

    const updatePage = (page: number) => {
        const count = getItemsPagesCount()
        const canUpdate = page >= 1 && count >= page
        if (canUpdate) {
            state.page = page
            state.isFirstPage = getIsFirstItemsPage()
            state.isLastPage = getIsLastItemsPage()
            // state.pages = getVisiblePaginationPages()
            onPagingUpdateCallback()
        }

        const firstVisiblePaginationPage = getFirstVisiblePaginationPage()

        const lastVisiblePaginationPage = getLastVisiblePaginationPage()

        if (page < firstVisiblePaginationPage) {
            prevPaginationPage()
        }
        if (page > lastVisiblePaginationPage) {
            nextPaginationPage()
        }
    }

    const nextPage = () => {
        const count = getItemsPagesCount()
        const nextPage = state.page + 1
        const canUpdate = count >= nextPage
        if (canUpdate) {
            state.page = nextPage
            state.isFirstPage = getIsFirstItemsPage()
            state.isLastPage = getIsLastItemsPage()
            onPagingUpdateCallback()
        }

        const lastVisiblePaginationPage = getLastVisiblePaginationPage()

        if (nextPage > lastVisiblePaginationPage) {
            nextPaginationPage()
        }
    }

    const prevPage = () => {
        const prevPage = state.page - 1
        const canUpdate = prevPage >= 1
        if (canUpdate) {
            state.page = prevPage
            state.isFirstPage = getIsFirstItemsPage()
            state.isLastPage = getIsLastItemsPage()
            onPagingUpdateCallback()
        }

        const firstVisiblePaginationPage = getFirstVisiblePaginationPage()

        if (firstVisiblePaginationPage > prevPage) {
            prevPaginationPage()
        }
    }

    install()

    onPagingUpdateCallback()

    return {
        updatePage,
        nextPage,
        prevPage,
        nextPaginationPage,
        prevPaginationPage,
    }
}
