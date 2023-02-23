import { describe, test } from "@jest/globals";
import { UniqueException } from "../lib/UrlSerializer/utils/exceptions";
import { UrlSerializer } from "../lib/UrlSerializer";

const root = 'https://anydomain.com' as const
const queries = {
    regionId: 12,
    cityId: 121,
    departments: [1, 6, 88],
    users: {
        ids: [12, 44, 9],
        registry: true
    },
    undefinedProperty: undefined,
    nullProperty: null
}

describe('Serializer', () => {
    test('creation', () => {
        const serializer = new UrlSerializer(root)

        const users = serializer.path('users').build()
        expect(users.path).toBe(root + '/users')
        
        const user = users.extend().param('userId').build()
        expect(user.path).toBe(root + '/users/:userId')

        const posts = user.extend().path('posts').build()
        expect(posts.path).toBe(root + '/users/:userId/posts')

        const post = posts.extend().param('postId').build()
        expect(post.path).toBe(root + '/users/:userId/posts/:postId')

        const usersLink = users.link({})
        expect(usersLink.path).toBe(root + '/users')

        const userLink = user.link({ ':userId': '10'})
        expect(userLink.path).toBe(root + '/users/10')

        const postsLink = posts.link({ ':userId': '10' })
        expect(postsLink.path).toBe(root + '/users/10/posts')

        const postLink = post.link({ ':userId': '10', ':postId': '20' })
        expect(postLink.path).toBe(root + '/users/10/posts/20')

        const extendedLink = postLink.extend().path('likes').param('likeId').path('user').build().link({
            ':likeId': '30'
        })
        expect(extendedLink.path).toBe(root + '/users/10/posts/20/likes/30/user')
    })
    test('unique exception', () => {
        try {
            const serializer = new UrlSerializer(root)

            const users = serializer.path('users').build()        
            const user = users.extend().param('userId').build()
            user.extend().param('userId')
        }
        catch(err) {
            expect(err).toBeInstanceOf(UniqueException)
        }
    })
    test('queries with default options', () => {
        const serializer = new UrlSerializer(root, { 
            skipNull: true, skipUndefined: true, objectAccsessor: '.', arrayAccsessor: '[]'
        })

        const data = serializer.build().queries(queries)

        expect(data.path).toBe(root + '?regionId=12&cityId=121&departments[]=1&departments[]=6&departments[]=88&users.ids[]=12&users.ids[]=44&users.ids[]=9&users.registry=true')

        const extended = data.extend().path('users').param('id').build()

        expect(extended.path).toBe(root + '/users/:id')
    })

    test('queries with custom options', () => {
        const serializer = new UrlSerializer(root, {
            objectAccsessor: '{}',
            arrayAccsessor: '[]',
            skipNull: true,
            skipUndefined: true
        })

        const data = serializer.build().queries(queries)

        expect(data.path).toBe(root + '?regionId=12&cityId=121&departments[]=1&departments[]=6&departments[]=88&users{ids}[]=12&users{ids}[]=44&users{ids}[]=9&users{registry}=true')

        const extended1 = data.extend().path('users').param('id').build()

        expect(extended1.path).toBe(root + '/users/:id')

        const extended2 = data.extend().build().queries(queries, { skipUndefined: false, skipNull: false })

        expect(extended2.path).toBe(root + '?regionId=12&cityId=121&departments[]=1&departments[]=6&departments[]=88&users{ids}[]=12&users{ids}[]=44&users{ids}[]=9&users{registry}=true&undefinedProperty=undefined&nullProperty=null')
    })
})
