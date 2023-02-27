import { Guards } from '../../../Guards'
import { Types } from '../../Types'

const getCount = (itemsLength: number, pageSize: number) => Math.ceil(itemsLength / pageSize)

export const paging = (options: Types.Array.Paging.Options) => {
    const { itemsCount, pageSize, paginationSize, onPagingUpdate } = options

    const state: Types.Array.Paging.State = {
        _page: 1,
        _isFirstPage: true,
        _isLastPage: false,
        _paginationPage: 1,
        _isFirstPaginationPage: true,
        _isLastPaginationPage: false,
        _paginationPages: [],
        _visiblePaginationPages: [],
    }

    const onPagingUpdateCallback = () => {
        if (Guards.isFunc(onPagingUpdate)) {
            onPagingUpdate(state)
        }
    }

    const getPaginationPagesCount = () => {
        return getCount(state._paginationPages.length, paginationSize)
    }
    const getItemsPagesCount = () => {
        return getCount(itemsCount, pageSize)
    }

    const getVisiblePaginationPages = () => {
        return state._paginationPages.slice(
            (state._paginationPage - 1) * paginationSize,
            state._paginationPage * paginationSize
        )
    }

    const install = () => {
        state._paginationPages = Array.from(Array(getItemsPagesCount()).keys()).map(
            (page) => page + 1
        )
        state._visiblePaginationPages = getVisiblePaginationPages()
    }

    const getIsFirstPaginationPage = () => {
        return state._paginationPage === 1
    }
    const getIsLastPaginationPage = () => {
        return state._paginationPage === getPaginationPagesCount()
    }
    const getFirstVisiblePaginationPage = () => {
        return state._visiblePaginationPages[0]
    }
    const getLastVisiblePaginationPage = () => {
        return state._visiblePaginationPages[state._visiblePaginationPages.length - 1]
    }
    const getIsFirstItemsPage = () => {
        return state._page === 1
    }
    const getIsLastItemsPage = () => {
        return state._page === getItemsPagesCount()
    }

    const nextPaginationPage = () => {
        const count = getPaginationPagesCount()
        const nextPaginationPage = state._paginationPage + 1
        const canUpdate = count >= nextPaginationPage
        if (canUpdate) {
            state._paginationPage = nextPaginationPage
            state._isFirstPaginationPage = getIsFirstPaginationPage()
            state._isLastPaginationPage = getIsLastPaginationPage()
            state._visiblePaginationPages = getVisiblePaginationPages()
            onPagingUpdateCallback()
        }
    }

    const prevPaginationPage = () => {
        const prevPaginationPage = state._paginationPage - 1
        const canUpdate = prevPaginationPage >= 1
        if (canUpdate) {
            state._paginationPage = prevPaginationPage
            state._isFirstPaginationPage = getIsFirstPaginationPage()
            state._isLastPaginationPage = getIsLastPaginationPage()
            state._visiblePaginationPages = getVisiblePaginationPages()
            onPagingUpdateCallback()
        }
    }

    const setPage = (page: number) => {
        const count = getItemsPagesCount()
        const canUpdate = page >= 1 && count >= page
        if (canUpdate) {
            state._page = page
            state._isFirstPage = getIsFirstItemsPage()
            state._isLastPage = getIsLastItemsPage()
            state._isLastPaginationPage = getIsLastPaginationPage()
            state._visiblePaginationPages = getVisiblePaginationPages()
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
        const nextPage = state._page + 1
        const canUpdate = count >= nextPage
        if (canUpdate) {
            state._page = nextPage
            state._isFirstPage = getIsFirstItemsPage()
            state._isLastPage = getIsLastItemsPage()
            onPagingUpdateCallback()
        }

        const lastVisiblePaginationPage = getLastVisiblePaginationPage()

        if (nextPage > lastVisiblePaginationPage) {
            nextPaginationPage()
        }
    }

    const prevPage = () => {
        const prevPage = state._page - 1
        const canUpdate = prevPage >= 1
        if (canUpdate) {
            state._page = prevPage
            state._isFirstPage = getIsFirstItemsPage()
            state._isLastPage = getIsLastItemsPage()
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
        setPage,
        nextPage,
        prevPage,
        nextPaginationPage,
        prevPaginationPage,
    }
}
