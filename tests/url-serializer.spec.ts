import { describe, test } from '@jest/globals'
import { UniqueParamException } from '../src/UrlSerializer/utils/exceptions'
import { UrlSerializer } from '../src/UrlSerializer'

const root = 'https://anydomain.com' as const
const queries = {
    regionId: 12,
    cityId: 121,
    departments: [88],
    users: {
        ids: [12],
        registry: true,
    },
    undefinedProperty: undefined,
    nullProperty: null,
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

        const userLink = user.link({ ':userId': '10' })
        expect(userLink.path).toBe(root + '/users/10')

        const postsLink = posts.link({ ':userId': '10' })
        expect(postsLink.path).toBe(root + '/users/10/posts')

        const postLink = post.link({ ':userId': '10', ':postId': '20' })

        expect(postLink.path).toBe(root + '/users/10/posts/20')

        const extendedLink = postLink.extend().path('likes').param('likeId').path('user').build().link({
            ':likeId': '30',
        })
        expect(extendedLink.path).toBe(root + '/users/10/posts/20/likes/30/user')
    })
    test('unique exception', () => {
        try {
            const serializer = new UrlSerializer(root)

            const users = serializer.path('users').build()
            const user = users.extend().param('userId').build()
            user.extend().param('userId')
        } catch (err) {
            expect(err).toBeInstanceOf(UniqueParamException)
        }
    })
    test('queries with default options', () => {
        const serializer = new UrlSerializer(root, {
            skipNull: true,
            skipUndefined: true,
            objectAccsessor: '.',
            arrayAccsessor: '[]',
        })

        const base = serializer.path('user').build().queries(queries)

        expect(base.path).toBe(
            root + '/user?regionId=12&cityId=121&departments[]=88&users.ids[]=12&users.registry=true'
        )
    })

    test('queries with custom options', () => {
        const serializer = new UrlSerializer(root, {
            objectAccsessor: '{}',
            arrayAccsessor: '[]',
            skipNull: true,
            skipUndefined: true,
        })

        const base = serializer.path('post').build()

        const extend1 = base.extend().param('id').build()

        expect(extend1.path).toBe(root + '/post/:id')

        const basequeries = base.queries(queries)

        expect(basequeries.path).toBe(
            root + '/post?regionId=12&cityId=121&departments[]=88&users{ids}[]=12&users{registry}=true'
        )

        const extend2 = base.extend().build()

        const extend2queries = extend2.queries({
            post: 23,
        })

        expect(extend2queries.path).toBe(base.path + '?post=23')

        const extend3queries = extend2queries.extend().build().queries({
            user: 16,
        })

        expect(extend3queries.path).toBe(base.path + '?post=23&user=16')
    })
})
