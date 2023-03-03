import { ArrayOf, Path } from '../../Base';
import { CollectionSortProps, CollectionSortResult } from './types';
declare const useCollectionSort: <T extends any[], XPath extends Path<ArrayOf<T>>>(options: CollectionSortProps<T, XPath>) => CollectionSortResult<T, XPath>;
export { useCollectionSort };
