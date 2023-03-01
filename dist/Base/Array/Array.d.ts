import { ArrayOf, JSONPath } from '../types';
import { CollectionPagingOptions } from './CollectionPaging';
import { SortOptions } from './CollectionSort';
export declare function $Array<T extends any[]>(collection: T): {
    sort: <XPath extends JSONPath<ArrayOf<T>, "">>(options: SortOptions<T, XPath>) => import("./CollectionSort/types").PublicSortMethods<T>;
    paging: (options: CollectionPagingOptions<T>) => import("./CollectionPaging/CollectionPaging").CollectionPaging<T>;
};
