import { PublicSortMethods, SortOptions, SortState } from '../../Base/Array/CollectionSort'
import { ArrayOf, Path } from '../../Base'

interface CollectionSortProps<T extends any[], XPath extends Path<ArrayOf<T>> = Path<ArrayOf<T>>>
    extends Omit<SortOptions<T, XPath>, 'onSortUpdate'> {
    collection: T
}
interface CollectionSortResult<T extends any[], XPath extends Path<ArrayOf<T>> = Path<ArrayOf<T>>>
    extends PublicSortMethods<T>,
        Partial<SortState<T, XPath>> {}

export type { CollectionSortProps, CollectionSortResult }
