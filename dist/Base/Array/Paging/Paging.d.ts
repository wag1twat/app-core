import { PagingOptions, PublicPagingMethods } from './types';
declare class Paging implements PublicPagingMethods {
    private state;
    private options;
    private pagingPage;
    private pagingPages;
    constructor(options: PagingOptions);
    private setState;
    private getPagesCount;
    private isFirstPage;
    private isLastPage;
    private isFirstPagingPage;
    private isLastPagingPage;
    private getPagingPages;
    private updatePagingPage;
    nextPagingPage(): void;
    prevPagingPage(): void;
    updatePage(page: number): void;
    nextPage(): void;
    prevPage(): void;
}
declare const paging: (options: PagingOptions) => PublicPagingMethods;
export { paging, Paging };
