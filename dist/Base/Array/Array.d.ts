import { ArrayOf, Path } from '../types';
import { CollectionPagingOptions } from './CollectionPaging';
import { SortOptions } from './CollectionSort';
export declare function $Array<T extends any[]>(collection: T): {
    sort: <XPath extends Path<ArrayOf<T>>>(options: SortOptions<T, XPath>) => import("./CollectionSort/types").PublicSortMethods<T>;
    paging: (options: CollectionPagingOptions<T>) => import("./CollectionPaging/CollectionPaging").CollectionPaging<T>;
};
