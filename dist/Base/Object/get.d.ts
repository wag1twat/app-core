import { Path, PathValue } from '../types';
declare function get<O extends object>(obj: O): <P extends Path<O>>(path: P) => PathValue<O, P> | undefined;
export { get };
