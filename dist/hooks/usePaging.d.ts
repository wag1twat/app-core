import { Types } from '../Base';
interface PagingProps extends Pick<Types.Array.Paging.Options, 'page' | 'pageSize' | 'paginationSize' | 'onMount' | 'itemsCount'> {
}
interface Pagign extends Types.Array.Paging.State, Types.Array.Paging.PagingMethods {
}
declare const usePaging: (options: PagingProps) => Pagign;
export type { PagingProps, Pagign };
export { usePaging };
