import { ArrayOf, JSONPath, PublicSortMethods, SortOptions, SortState } from '../../Base'

interface CollectionSortProps<
    T extends any[],
    XPath extends JSONPath<ArrayOf<T>> = JSONPath<ArrayOf<T>>
> extends Omit<SortOptions<T, XPath>, 'onSortUpdate'> {
    collection: T
}
interface CollectionSortResult<T extends any[]>
    extends PublicSortMethods<T>,
        Partial<SortState<T>> {}

export type { CollectionSortProps, CollectionSortResult }
