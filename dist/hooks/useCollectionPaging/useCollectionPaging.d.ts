import { CollectionPagingResult, CollectionPagingProps } from './types';
declare const useCollectionPaging: <T extends unknown[]>(options: CollectionPagingProps<T>) => CollectionPagingResult<T>;
export { useCollectionPaging };
