import { Types } from '../Types';
declare const createSort: <T extends any[]>(collection: T) => <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>, "">>(options: Types.Array.Sort.Options<T, XPath>) => {
    cleanup: () => void;
    update: <XPath_1 extends Types.Utility.JSONPath<Types.Array.Of<T>, "">>(options?: Types.Array.Sort.UpdateOptions<T, XPath_1>) => void;
};
export default createSort;
