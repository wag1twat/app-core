import { Path, PathValue } from '../../types';
declare const groupBy: <T extends object, K extends Path<T>>(t: T[], key: K) => {
    map: Map<PathValue<T, K>, T[]>;
    values: T[][];
    entries: [PathValue<T, K>, T[]][];
};
export { groupBy };
