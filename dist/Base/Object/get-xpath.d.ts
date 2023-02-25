import { Types } from '../Types';
declare const getXPath: <O extends object>(obj: O) => <Path extends Types.Utility.JSONPath<O, "">>(path: Path) => Types.Utility.JSONFind<O, Path> | undefined;
export default getXPath;
