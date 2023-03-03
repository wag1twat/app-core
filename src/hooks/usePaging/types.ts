import { PagingOptions, PagingState, PublicPagingMethods } from '../../Base/Array/Paging'

type PagingProps = Omit<PagingOptions, 'onPagingUpdate'>
type PagingResult = PublicPagingMethods & Partial<PagingState>

export type { PagingProps, PagingResult }
