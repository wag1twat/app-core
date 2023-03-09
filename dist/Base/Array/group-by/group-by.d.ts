import { ArrayOf, Path, PathValue } from '../../types';
declare const groupBy: <T extends any[], K extends Path<ArrayOf<T>>>(t: T, key: K) => {
    map: Map<PathValue<ArrayOf<T>, K>, ArrayOf<T>[]>;
    values: ArrayOf<T>[][];
    entries: [PathValue<ArrayOf<T>, K>, ArrayOf<T>[]][];
};
export { groupBy };
