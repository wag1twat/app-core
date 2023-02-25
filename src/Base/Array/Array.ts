import createSort from './create-sort'

export function $Array<T extends any[]>(collection: T = [] as unknown as T) {
    const sort = createSort(collection)

    return {
        sort,
    }
}
