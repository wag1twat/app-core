import { Types } from '../Base';
interface ArrayPagingProps<T extends any> {
    pageSize: number;
    paginationSize: number;
    items: T[] | undefined;
}
interface ArrayPaging<T extends any> extends Types.Array.PagingCollection.State<T[]> {
    updatePage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    nextPaginationPage: () => void;
    prevPaginationPage: () => void;
}
declare const useArrayPaging: <T extends unknown>(props: ArrayPagingProps<T>) => ArrayPaging<T>;
export type { ArrayPagingProps, ArrayPaging };
export { useArrayPaging };
