import { CollectionPagingOptions, PagingState, PublicPagingMethods } from '../../Base';
type CollectionPagingProps<T extends any[]> = Omit<CollectionPagingOptions<T>, 'onPagingUpdate' | 'onCollectionUpdate'> & {
    collection: T;
};
interface CollectionPagingResult<T extends any[]> extends PublicPagingMethods, Partial<PagingState & {
    collection: T;
}> {
}
export type { CollectionPagingProps, CollectionPagingResult };
