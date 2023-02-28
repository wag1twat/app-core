import { Guards } from '../../../Guards'
import { Types } from '../../Types'
import { paging } from './paging'

export const createPaging = <T extends any[]>(collection: T) => {
    // TODO: cache values
    // let cache: Record<string, T> = {}

    return (options: Types.Array.CreatePaging.Options<T>) => {
        const {
            startsWith,
            pageSize,
            paginationSize,
            onMount,
            onPagingUpdate,
            onCollectionUpdate,
        } = options
        const onUpdate = (state: Types.Array.Paging.State) => {
            if (Guards.isFunc(onPagingUpdate)) {
                onPagingUpdate(state)
                onCollectionUpdate(
                    collection.slice((state.page - 1) * pageSize, state.page * pageSize) as T
                )
            }
        }
        return paging({
            itemsCount: collection.length,
            startsWith,
            pageSize,
            paginationSize,
            onMount,
            onPagingUpdate: onUpdate,
        })
    }
}
