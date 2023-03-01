import { describe, test, expect } from '@jest/globals'
import { UrlSerializer } from '../src/UrlSerializer'
import { serializeQueries } from '../src/Base/String/serializeQueries'

const url = new UrlSerializer('')

const query = url.build().queries({
    city: '1',
    regions: ['1', '2', '6', '88'],
    users: ['1', '2', '3', '4', '5'],
    rules: { allow: ['yes'] },
    paging: { page: '1', limit: '10' },
})

const queries = query.path.substring(query.path.indexOf('?') + 1, query.path.length)
console.log(queries)
describe('serialize queries', () => {
    test('init test', () => {
        const serialize = serializeQueries('.', '[]', queries)

        console.log(serialize)
    })
})
