import { set } from '../../src/Base/Object/set'
import mockObject from './mock.object'

describe('object set', () => {
    test('props', () => {
        let target = { ...mockObject }

        target = set(target)('matrix.1.1', '1')

        expect(target.matrix[1][1]).toBe('1')

        target = set(target)('matrix.1.1', '2')

        expect(target.matrix[1][1]).toBe('2')

        target = set(target)('matrix.1.1', '3')

        expect(target.matrix[1][1]).toBe('3')

        target = set(target)('matrix.1.1', '4')

        expect(target.matrix[1][1]).toBe('4')

        target = set(target)('matrix.1.1', '5')

        expect(target.matrix[1][1]).toBe('5')

        target = set(target)('matrix.1', ['1'])

        expect(target.matrix[1]).toEqual(['1'])

        target = set(target)('matrix.2', ['2'])

        expect(target.matrix[2]).toEqual(['2'])

        target = set(target)('matrix.3', ['3'])

        expect(target.matrix[3]).toEqual(['3'])

        target = set(target)('matrix.4', ['4'])

        expect(target.matrix[4]).toEqual(['4'])

        target = set(target)('matrix.5', ['5'])

        expect(target.matrix[5]).toEqual(['5'])

        target = set(target)('name', 'Cock')

        expect(target.name).toBe('Cock')
        
        target = set(target)('name', 'Adam')

        expect(target.name).toBe('Adam')

        target = set(target)('name', 'Eva')

        expect(target.name).toBe('Eva')

        target = set(target)('name', 'Leon')

        expect(target.name).toBe('Leon')

        target = set(target)('name', 'John Weak')

        expect(target.name).toBe('John Weak')
    })
})
