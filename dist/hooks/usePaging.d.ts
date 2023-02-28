import { Types } from '../Base';
interface PagingProps {
    pageSize: number;
    paginationSize: number;
    itemsCount: number;
}
interface Pagign extends Types.Array.Paging.State {
    updatePage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    nextPaginationPage: () => void;
    prevPaginationPage: () => void;
}
declare const usePaging: (options: PagingProps) => Pagign;
export type { PagingProps, Pagign };
export { usePaging };
