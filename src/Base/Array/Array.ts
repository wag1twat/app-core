import { ArrayOf, Path } from '../types'
import { collectionPaging, CollectionPagingOptions } from './CollectionPaging'
import { collectionSort, SortOptions } from './CollectionSort'

export function $Array<T extends any[]>(collection: T) {
    return {
        sort: <XPath extends Path<ArrayOf<T>>>(options: SortOptions<T, XPath>) =>
            collectionSort(collection, options),
        paging: (options: CollectionPagingOptions<T>) => collectionPaging(collection, options),
    }
}
