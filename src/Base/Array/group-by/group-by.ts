import { Guards } from '../../../Guards'
import { get } from '../../Object/get'
import { ArrayOf, Path, PathValue } from '../../types'

const groupBy = function <T extends any[], K extends Path<ArrayOf<T>>>(t: T, key: K) {
    const map = new Map<PathValue<ArrayOf<T>, K>, ArrayOf<T>[]>()

    if (t.some((item) => !Guards.isObject(item))) {
        return {
            map,
            values: Array.from(map.values()),
            entries: Array.from(map.entries()),
        }
    }

    t.forEach((item) => {
        const k = get(item)(key)

        if (k) {
            const collection = map.get(k)

            if (!collection) {
                map.set(k, [item])
            } else {
                collection.push(item)
            }
        }
    })

    return {
        map,
        values: Array.from(map.values()),
        entries: Array.from(map.entries()),
    }
}

export { groupBy }
