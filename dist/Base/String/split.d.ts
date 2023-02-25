import { Types } from '../Types';
declare const split: <S extends string>(string: S) => <Separator extends string>(separator: string, limit?: number | undefined) => Types.String.Split<S, Separator>;
export default split;
