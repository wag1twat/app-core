import { Paging } from '../Paging';
import { CollectionPagingOptions } from './types';
declare class CollectionPaging<T extends unknown[]> extends Paging {
    constructor(collection: T, options: CollectionPagingOptions<T>);
}
declare const collectionPaging: <T extends unknown[]>(collection: T, options: CollectionPagingOptions<T>) => CollectionPaging<T>;
export { CollectionPaging, collectionPaging };
