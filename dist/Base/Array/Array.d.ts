import { Types } from '../Types';
export declare function $Array<T extends any[]>(collection?: T): {
    sort: <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>, "">>(options: Types.Array.Sort.Options<T, XPath>) => {
        cleanup: () => void;
        update: <XPath_1 extends Types.Utility.JSONPath<Types.Array.Of<T>, "">>(options?: Types.Array.Sort.UpdateOptions<T, XPath_1>) => void;
    };
    paging: (options: Types.Array.PagingCollection.Options<T>) => {
        setPage: (page: number) => void;
        nextPage: () => void;
        prevPage: () => void;
        nextPaginationPage: () => void;
        prevPaginationPage: () => void;
    };
};
