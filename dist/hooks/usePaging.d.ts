import { Types } from '../Base';
type PagingProps = Omit<Types.Array.Paging.Options, 'onPagingUpdate'>;
type Paging = Types.Array.Paging.PagingMethods & Partial<Types.Array.Paging.State>;
declare const usePaging: (options: PagingProps) => Paging;
export type { PagingProps, Paging };
export { usePaging };
