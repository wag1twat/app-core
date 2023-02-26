import { Types } from '../Types';
declare const split: <S extends string>(string: S) => <Separator extends string | RegExp>(separator: Separator, limit?: number | undefined) => Separator extends string ? Types.String.Split<S, Separator> : string[];
export default split;
