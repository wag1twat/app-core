import { ArrayOf, Path } from '../../types';
import { PublicSortMethods, SortOptions } from './types';
declare const collectionSort: <T extends any[], XPath extends Path<ArrayOf<T>>>(collection: T, options: SortOptions<T, XPath>) => PublicSortMethods<T>;
export { collectionSort };
