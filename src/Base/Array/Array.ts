import { ArrayOf, Path } from '../types'
import { collectionPaging, CollectionPagingOptions } from './CollectionPaging'
import { collectionSort, SortOptions } from './CollectionSort'
import { groupBy as _groupBy } from './group-by'

export function $Array<T extends any[]>(collection: T) {
    return {
        sort: <P extends Path<ArrayOf<T>>>(options: SortOptions<T, P>) =>
            collectionSort<T, P>(collection, options),
        paging: (options: CollectionPagingOptions<T>) => collectionPaging<T>(collection, options),
        groupBy: <P extends Path<ArrayOf<T>>>(key: P) => _groupBy<T, P>(collection, key),
    }
}
