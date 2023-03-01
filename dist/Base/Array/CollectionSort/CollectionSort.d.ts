import { ArrayOf, JSONPath } from '../../types';
import { PublicSortMethods, SortOptions } from './types';
declare const collectionSort: <T extends any[], XPath extends JSONPath<ArrayOf<T>, "">>(collection: T, options: SortOptions<T, XPath>) => PublicSortMethods<T>;
export { collectionSort };
