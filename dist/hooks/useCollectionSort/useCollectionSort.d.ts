import { ArrayOf, JSONPath } from '../../Base';
import { CollectionSortProps, CollectionSortResult } from './types';
declare const useCollectionSort: <T extends any[], XPath extends JSONPath<ArrayOf<T>, "">>(options: CollectionSortProps<T, XPath>) => CollectionSortResult<T>;
export { useCollectionSort };
