import { get } from '../../src/Base/Object/get'
import mockObject from './mock.object'

describe('object get', () => {
    test('props', () => {
        let id = get(mockObject)('batters.batter.0.id')

        expect(id).toBe(mockObject.batters.batter[0].id)

        id = get(mockObject)('batters.batter.1.id')

        expect(id).toBe(mockObject.batters.batter[1].id)

        id = get(mockObject)('batters.batter.2.id')

        expect(id).toBe(mockObject.batters.batter[2].id)

        id = get(mockObject)('batters.batter.3.id')

        expect(id).toBe(mockObject.batters.batter[3].id)

        let batter = get(mockObject)('batters.batter')

        expect(batter).toEqual(mockObject.batters.batter)

        let batters = get(mockObject)('batters')

        expect(batters).toEqual(mockObject.batters)

        let matrix = get(mockObject)('matrix.0')

        expect(matrix).toEqual(mockObject.matrix[0])

        matrix = get(mockObject)('matrix.1')

        expect(matrix).toEqual(mockObject.matrix[1])

        matrix = get(mockObject)('matrix.2')

        expect(matrix).toEqual(mockObject.matrix[2])

        matrix = get(mockObject)('matrix.3')

        expect(matrix).toEqual(mockObject.matrix[3])

        matrix = get(mockObject)('matrix.4')

        expect(matrix).toEqual(mockObject.matrix[4])

        matrix = get(mockObject)('matrix.5')

        expect(matrix).toEqual(mockObject.matrix[5])

        matrix = get(mockObject)('matrix.6')

        expect(matrix).toEqual(mockObject.matrix[6])

        matrix = get(mockObject)('matrix.7')

        expect(matrix).toEqual(mockObject.matrix[7])

        matrix = get(mockObject)('matrix.8')

        expect(matrix).toBeUndefined()
    })
})
