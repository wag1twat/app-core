import { PagingOptions } from '../Paging';
interface CollectionPagingOptions<T extends unknown[]> extends Omit<PagingOptions, 'itemsCount'> {
    onCollectionUpdate(collection: T): void;
}
export type { CollectionPagingOptions };
