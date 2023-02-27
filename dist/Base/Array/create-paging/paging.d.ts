import { Types } from '../../Types';
export declare const paging: (options: Types.Array.Paging.Options) => {
    setPage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    nextPaginationPage: () => void;
    prevPaginationPage: () => void;
};
