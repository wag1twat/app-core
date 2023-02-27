import { Types } from '../../Types'
import { paging } from './paging'

export const createPaging = <T extends any[]>(collection: T) => {
    let cache: Record<string, T> = {}

    return (options: Types.Array.PagingCollection.Options<T>) => {
        const { pageSize, paginationSize, onUpdate } = options
        return paging({
            itemsCount: collection.length,
            pageSize,
            paginationSize,
            onPagingUpdate(state) {
                let _collection = cache[state._page]

                _collection = _collection
                    ? _collection
                    : (collection.slice((state._page - 1) * pageSize, state._page * pageSize) as T)

                onUpdate({
                    _page: state._page,
                    _isFirstPage: state._isFirstPage,
                    _isLastPage: state._isLastPage,
                    _isFirstPaginationPage: state._isFirstPaginationPage,
                    _isLastPaginationPage: state._isLastPaginationPage,
                    _collection: _collection,
                })
            },
        })
    }
}
