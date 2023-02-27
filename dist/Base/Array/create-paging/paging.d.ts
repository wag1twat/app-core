import { Types } from '../../Types';
export declare const paging: (options: Types.Array.Paging.Options) => {
    updatePage: (page: number) => void;
    nextPage: () => void;
    prevPage: () => void;
    nextPaginationPage: () => void;
    prevPaginationPage: () => void;
};
