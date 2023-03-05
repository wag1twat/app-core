import { get } from '../../Object/get'
import { Path, PathValue } from '../../types'

const groupBy = function <T extends object, K extends Path<T>>(t: T[], key: K) {
    const map = new Map<PathValue<T, K>, T[]>()

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
