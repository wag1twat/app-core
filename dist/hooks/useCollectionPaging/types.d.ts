import { CollectionPagingOptions } from '../../Base/Array/CollectionPaging';
import { PagingState, PublicPagingMethods } from '../../Base/Array/Paging';
type CollectionPagingProps<T extends any[]> = Omit<CollectionPagingOptions<T>, 'onPagingUpdate' | 'onCollectionUpdate'> & {
    collection: T;
};
interface CollectionPagingResult<T extends any[]> extends PublicPagingMethods, Partial<PagingState & {
    collection: T;
}> {
}
export type { CollectionPagingProps, CollectionPagingResult };
