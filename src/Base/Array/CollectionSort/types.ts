import { ArrayOf, JSONFind, JSONPath, Primitive } from '../../types'

type SortOrder = 'ASC' | 'DESC' | 'default'

type SortFieldObject<T extends any[], XPath extends JSONPath<ArrayOf<T>>> = {
    xpath: XPath
    handler: (
        item: JSONFind<ArrayOf<T>, XPath> | undefined
    ) => Primitive
}

type SortField<T extends any[], XPath extends JSONPath<ArrayOf<T>>> =
    | XPath
    | SortFieldObject<T, XPath>

interface SortState<T extends any[]> {
    collection: T
    order: SortOrder
    orders: SortOrder[]
    field?: SortField<T, JSONPath<ArrayOf<T>>>
}

type SortOptions<T extends any[], XPath extends JSONPath<ArrayOf<T>>> = {
    field?: SortField<T, XPath>
    order?: SortOrder
    orders?: SortOrder[]
    onMount?: boolean
    onSortUpdate: (state: SortState<T>) => void
}

interface SortUpdateOptions<T extends any[], XPath extends JSONPath<ArrayOf<T>>> {
    field?: SortField<T, XPath>
}
interface PublicSortMethods<T extends any[]> {
    update<XPath extends JSONPath<ArrayOf<T>>>(
        options?: SortUpdateOptions<T, XPath>
    ): void
    cleanup(): void
}

export type { SortOrder, SortState, SortField, PublicSortMethods, SortOptions, SortUpdateOptions }
