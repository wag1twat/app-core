import { ReplaceAll } from '../types/utils';
declare const replaceAll: <S extends string>(string: S) => <P extends {
    [x: string]: any;
}, Separator extends string = string>(separator: Separator, properties: P) => ReplaceAll<S, P, "">;
export { replaceAll };
