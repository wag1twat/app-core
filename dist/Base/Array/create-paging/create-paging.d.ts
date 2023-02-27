import { Types } from '../../Types';
export declare const createPaging: <T extends any[]>(collection: T) => (options: Types.Array.PagingCollection.Options<T>) => {
    setPage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    nextPaginationPage: () => void;
    prevPaginationPage: () => void;
};
