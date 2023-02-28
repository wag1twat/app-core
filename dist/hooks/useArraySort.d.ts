import { Types } from '../Base';
interface ArraySortProps<T extends any[], XPath extends Types.Utility.JSONPath<Types.Array.Of<T>> = Types.Utility.JSONPath<Types.Array.Of<T>>> extends Omit<Types.Array.Sort.Options<T, XPath>, 'onSortUpdate'> {
    collection: T;
}
interface ArraySort<T extends any[]> extends Types.Array.Sort.SortMethods<T>, Partial<Types.Array.Sort.State<T>> {
}
declare const useArraySort: <T extends any[], XPath extends Types.Utility.JSONPath<Types.Array.Of<T>, "">>(options: ArraySortProps<T, XPath>) => ArraySort<T>;
export type { ArraySortProps, ArraySort };
export { useArraySort };
