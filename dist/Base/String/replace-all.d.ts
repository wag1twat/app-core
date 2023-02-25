import { Types } from '../Types';
declare const replaceAll: <S extends string>(string: S) => <P extends {
    [x: string]: any;
}, Separator extends string = string>(separator: Separator, properties: P) => Types.String.ReplaceAll<S, P, "">;
export default replaceAll;
