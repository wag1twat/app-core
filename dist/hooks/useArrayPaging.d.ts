import { Types } from '../Base';
type ArrayPagingProps<T extends any[]> = Omit<Types.Array.CreatePaging.Options<T>, 'onPagingUpdate' | 'onCollectionUpdate'> & {
    collection: T;
};
type ArrayPaging<T extends any[]> = Types.Array.Paging.PagingMethods & Partial<Types.Array.Paging.State & {
    collection: T;
}>;
declare const useArrayPaging: <T extends any[]>(options: ArrayPagingProps<T>) => ArrayPaging<T>;
export type { ArrayPagingProps, ArrayPaging };
export { useArrayPaging };
