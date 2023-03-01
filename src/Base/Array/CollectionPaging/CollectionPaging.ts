import { Guards } from '../../../Guards'
import { Paging, PagingState } from '../Paging'
import { CollectionPagingOptions } from './types'

class CollectionPaging<T extends unknown[]> extends Paging {
    constructor(collection: T, options: CollectionPagingOptions<T>) {
        const onPagingUpdate = function (state: PagingState) {
            if (Guards.isFunc(options.onPagingUpdate)) {
                options.onPagingUpdate(state)
            }

            options.onCollectionUpdate(
                collection.slice(
                    (state.page - 1) * options.pageSize,
                    state.page * options.pageSize
                ) as T
            )
        }

        super({ ...options, itemsCount: collection.length, onPagingUpdate })
    }
}

const collectionPaging = <T extends unknown[]>(
    collection: T,
    options: CollectionPagingOptions<T>
) => new CollectionPaging(collection, options)

export { CollectionPaging, collectionPaging }
