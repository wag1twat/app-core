import { Types } from '../Types'
import { createSort } from './create-sort'

export function $Array<T extends any[]>(collection: T = [] as unknown as T) {
    return {
        sort: <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            options: Types.Array.Sort.Options<T, XPath>
        ) => createSort<T>(collection)<XPath>(options),
    }
}
