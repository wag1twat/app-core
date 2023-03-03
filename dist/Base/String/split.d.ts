import { Split } from '../types/utils';
declare const split: <S extends string>(string: S) => <Separator extends string | RegExp>(separator: Separator, limit?: number | undefined) => Separator extends string ? Split<S, Separator> : string[];
export { split };
