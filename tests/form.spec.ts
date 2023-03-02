import { describe, test } from '@jest/globals'
import { Form } from '../src/Form'

describe('Form', () => {
    test('init test', () => {
        const form = new Form({
            defaultValues: {
                id: '',
            },
        })
    })
})
