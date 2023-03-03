import { Path, PathValue } from '../types';
declare function set<O extends object>(object: O): <P extends Path<O>, V extends PathValue<O, P>>(path: P, value: V) => O;
export { set };
