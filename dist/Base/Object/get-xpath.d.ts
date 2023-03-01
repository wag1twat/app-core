import { JSONFind, JSONPath } from '../types';
declare const getXPath: <O extends object>(obj: O) => <Path extends JSONPath<O, "">>(path: Path) => JSONFind<O, Path> | undefined;
export default getXPath;
