import { ToQueriesOptions } from './types';
declare const toQueries: <O extends object>(obj: O) => (options?: Partial<ToQueriesOptions>, prefix?: string) => string;
export { toQueries };
