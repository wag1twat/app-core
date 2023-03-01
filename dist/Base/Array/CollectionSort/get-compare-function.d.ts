import { SortOrder } from './types';
declare const getCompareFunction: (order: Exclude<SortOrder, 'default'>, l: any, r: any) => number;
export default getCompareFunction;
