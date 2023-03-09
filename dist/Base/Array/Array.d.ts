import { ArrayOf, Path } from '../types';
import { CollectionPagingOptions } from './CollectionPaging';
import { SortOptions } from './CollectionSort';
export declare function $Array<T extends any[]>(collection: T): {
    sort: <P extends Path<ArrayOf<T>>>(options: SortOptions<T, P>) => import("./CollectionSort/types").PublicSortMethods<T>;
    paging: (options: CollectionPagingOptions<T>) => import("./CollectionPaging/CollectionPaging").CollectionPaging<T>;
    groupBy: <P_1 extends Path<ArrayOf<T>>>(key: P_1) => {
        map: Map<import("../types").PathValue<ArrayOf<T>, P_1>, ArrayOf<T>[]>;
        values: ArrayOf<T>[][];
        entries: [import("../types").PathValue<ArrayOf<T>, P_1>, ArrayOf<T>[]][];
    };
};
