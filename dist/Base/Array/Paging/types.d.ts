interface PagingState {
    page: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    isFirstPagingPage: boolean;
    isLastPagingPage: boolean;
    pages: number[];
}
interface PagingOptions {
    itemsCount: number;
    startsWith?: number;
    pageSize: number;
    paginationSize: number;
    onMount?: boolean;
    onPagingUpdate?: (state: PagingState) => void;
}
interface PublicPagingMethods {
    nextPage: () => void;
    nextPagingPage: () => void;
    prevPage: () => void;
    prevPagingPage: () => void;
    updatePage: (page: number) => void;
}
export type { PagingState, PagingOptions, PublicPagingMethods };
