import { Types } from '../Types';
declare const toQueries: <O extends object>(obj: O) => (options?: Partial<Types.Object.ToQueriesOptions>, prefix?: string) => string;
export default toQueries;
