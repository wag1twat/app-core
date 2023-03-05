import { describe, test } from '@jest/globals'
import { groupBy } from '../../src/Base/Array/group-by'

const array = [
    {
        id: 0,
        group: '1',
        label: 'Бесплатные',
    },
    {
        id: 1,
        group: '1',
        label: 'Платные',
    },
    {
        id: 2,
        group: '2',
        label: 'Простые',
    },
    {
        id: 3,
        group: '2',
        label: 'Новинки',
    },
    {
        id: 4,
        group: '2',
        label: 'Облачные',
    },
    {
        id: 5,
        group: '3',
        label: 'Торговая площадка',
    },
]

describe('array group', () => {
    test('init test', () => {
        const result = groupBy(array, 'group')
    })
})
