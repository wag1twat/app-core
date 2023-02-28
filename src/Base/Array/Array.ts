import { Types } from '../Types'
import { createPaging } from './create-paging'
import { createSort } from './create-sort'

export function $Array<T extends any[]>(collection: T) {
    return {
        sort: <XPath extends Types.Utility.JSONPath<Types.Array.Of<T>>>(
            options: Types.Array.Sort.Options<T, XPath>
        ) => createSort<T>(collection)<XPath>(options),
        paging: (options: Types.Array.CreatePaging.Options<T>) => createPaging(collection)(options),
    }
}
