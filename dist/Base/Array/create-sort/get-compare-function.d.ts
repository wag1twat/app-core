import { Types } from '../../Types';
declare const getCompareFunction: (order: Exclude<Types.Array.Sort.Order, 'default'>, l: any, r: any) => number;
export default getCompareFunction;
