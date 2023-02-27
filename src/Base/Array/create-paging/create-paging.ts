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
                onUpdate({
                    ...state,
                    collection: cache[state.page]
                        ? cache[state.page]
                        : (collection.slice(
                              (state.page - 1) * pageSize,
                              state.page * pageSize
                          ) as T),
                })
            },
        })
    }
}
