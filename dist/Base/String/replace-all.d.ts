import { ReplaceAll } from '../types';
declare const replaceAll: <S extends string>(string: S) => <P extends {
    [x: string]: any;
}, Separator extends string = string>(separator: Separator, properties: P) => ReplaceAll<S, P, "">;
export default replaceAll;
