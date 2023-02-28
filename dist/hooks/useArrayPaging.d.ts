import { Types } from '../Base';
interface ArrayPagingProps<T extends any> extends Pick<Types.Array.Paging.Options, 'page' | 'pageSize' | 'paginationSize' | 'onMount'> {
    items: T[] | undefined;
}
interface ArrayPaging<T extends any> extends Types.Array.CreatePaging.State<T[]>, Types.Array.Paging.PagingMethods {
}
declare const useArrayPaging: <T extends unknown>(props: ArrayPagingProps<T>) => ArrayPaging<T>;
export type { ArrayPagingProps, ArrayPaging };
export { useArrayPaging };
