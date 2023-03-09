import { describe, test } from '@jest/globals'
import { groupBy } from '../../src/Base/Array/group-by'
import { $Array } from '../../src/Base'

const array: Array<{ id: number; group: string; label: string }> = [
    { id: 0, group: '1', label: 'label 1' },
    { id: 1, group: '1', label: 'label 2' },
    { id: 2, group: '1', label: 'label 3' },
    { id: 3, group: '2', label: 'label 4' },
    { id: 4, group: '2', label: 'label 5' },
    { id: 5, group: '1', label: 'label 6' },
    { id: 6, group: '5', label: 'label 7' },
    { id: 7, group: '5', label: 'label 8' },
]

describe('array group', () => {
    test('init test', () => {
        const result = groupBy(array, 'group')

        expect(result.map.get('1')?.length).toBe(4)

        const result1 = $Array(array).groupBy('group')

        expect(result1.map.get('1')?.length).toBe(4)
    })
})
