import { ArrayOf, PathValue, Path, Primitive } from '../../types';
type SortOrder = 'ASC' | 'DESC' | 'default';
type SortFieldObject<T extends any[], XPath extends Path<ArrayOf<T>>> = {
    xpath: XPath;
    handler: (item: PathValue<ArrayOf<T>, XPath> | undefined) => Primitive;
};
type SortField<T extends any[], XPath extends Path<ArrayOf<T>>> = XPath | SortFieldObject<T, XPath>;
interface SortState<T extends any[], XPath extends Path<ArrayOf<T>>> {
    collection: T;
    order: SortOrder;
    orders: SortOrder[];
    field?: SortField<T, XPath>;
}
type SortOptions<T extends any[], XPath extends Path<ArrayOf<T>>> = {
    field?: SortField<T, XPath>;
    order?: SortOrder;
    orders?: SortOrder[];
    onMount?: boolean;
    onSortUpdate: (state: SortState<T, XPath>) => void;
};
interface SortUpdateOptions<T extends any[], XPath extends Path<ArrayOf<T>>> {
    field?: SortField<T, XPath>;
}
interface PublicSortMethods<T extends any[]> {
    update<XPath extends Path<ArrayOf<T>>>(options?: SortUpdateOptions<T, XPath>): void;
    cleanup(): void;
}
export type { SortOrder, SortState, SortField, PublicSortMethods, SortOptions, SortUpdateOptions };
