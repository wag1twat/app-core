import { Types } from '../../Types'
import { paging } from './paging'

export const createPaging = <T extends any[]>(collection: T) => {
    let cache: Record<string, T> = {}

    return (options: Types.Array.CreatePaging.Options<T>) => {
        const { page, pageSize, paginationSize, onMount, onPagingUpdate } = options
        return paging({
            itemsCount: collection.length,
            page,
            pageSize,
            paginationSize,
            onMount,
            onPagingUpdate: (state) =>
                onPagingUpdate(
                    Object.assign(state, {
                        collection: cache[state.page]
                            ? cache[state.page]
                            : (collection.slice(
                                  (state.page - 1) * pageSize,
                                  state.page * pageSize
                              ) as T),
                    })
                ),
        })
    }
}
