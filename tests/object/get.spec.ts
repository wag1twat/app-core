import { $Object, Primitive } from '../../src/Base'
import split from '../../src/Base/String/split'

type _IsArray<T> = T extends unknown[] | readonly unknown[] ? true : false

type IsArray<T> = IsObject<T> extends false ? _IsArray<T> : false
type IsObject<T> = _IsArray<T> extends false ? (T extends object ? true : false) : false

type User = {
    id: 22
    metadata: {
        name: 'testname'
        x: {
            a: {
                b: 1
            }
        }
    }
    likes: [{ n: { x: 'like1' }; a: [213, 33] }, { n: { x: 'like2' }; a: [235, 655] }]
    comments: ['comment1', 'comment2', 'comment3', 'comment4']
    addrr: [1, 1231, 3424, 443345]
    arr: [[1, 2], [44, 54], [44, 54], [2313, 1313]]
    values: {
        indeces: [1, 2, 3, 131, 13133]
    }
}
type User1 = {
    id: number
    metadata: {
        name: string
    }
    likes: Array<{ n: { x: string; a: number[] } }>
    comments: string[]
    addrr: number[]
    arr: number[][]
}

type Users = [User]

type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer E)[] ? E : never

type AsFunctionWithArgsOf<T extends unknown[] | readonly unknown[]> = (...args: T) => any

type TailArgs<T> = T extends (x: any, ...args: infer T) => any ? T : never

type Tail<T extends unknown[] | readonly unknown[]> = TailArgs<AsFunctionWithArgsOf<T>>

type AsDescendingLengths<T extends unknown[] | readonly unknown[]> = [] extends T
    ? [0]
    : [ElementOf<ElementOf<AsDescendingLengths<Tail<T>>[]>>, T['length']]

type IndicesOf<T extends unknown[] | readonly unknown[]> = number extends T['length']
    ? number
    : [] extends T
    ? never
    : ElementOf<AsDescendingLengths<Tail<T>>>

type Prop<T> = string & T

type ArrayPath<T, K, Prefix = ''> = T extends (infer U)[]
    ? IsArray<U> extends true
        ? ArrayPath<U, `${Prop<Prefix>}${Prop<K>}[${IndicesOf<T>}]`>
        : IsObject<U> extends true
        ? Path<U, `${Prop<Prefix>}${Prop<K>}[${IndicesOf<T>}].`>
        : `${Prop<Prefix>}${Prop<K>}[${IndicesOf<T>}]`
    : never

type Path<T, Prefix = ''> = {
    [K in keyof T]: T[K] extends Primitive
        ? `${Prop<Prefix>}${Prop<K>}`
        : IsObject<T[K]> extends true
        ? `${Prop<Prefix>}${Prop<K>}` | Path<T[K], `${Prop<Prefix>}${Prop<K>}.`>
        : IsArray<T[K]> extends true
        ? `${Prop<Prefix>}${Prop<K>}` | ArrayPath<T[K], K, Prefix> | (T[K] extends unknown[] | readonly unknown[] ? `${Prop<Prefix>}${Prop<K>}[${IndicesOf<T[K]>}]` : never)
        : never
}[keyof T]

type PathValue<T extends Record<string, any>, P extends Path<T> = Path<T>> = 
    P extends keyof T
        ? T[P]
        : P extends `${infer U}.${infer D}`
        ? D extends Path<T[U]> 
        ? PathValue<T[U], D>
        : never
        : P extends `${infer A}[${infer I}]`
        ? A extends Path<T> ? PathValue<T, A>[I]
        : never
        : never

const user = {
    id: 22,
    metadata: {
        name: 'testname',
    },
    likes: [
        { n: { x: 'like1', a: [213, 33] },  },
        { n: { x: 'like2', a: [235, 655] } },
    ],
    comments: ['comment1', 'comment2', 'comment3', 'comment4'],
    addrr: [1, 1231, 3424, 443345],
    arr: [
        [1, 2],
        [44, 54],
        [44, 54],
        [2313, 1313],
    ],
    values: {
        indeces: [1, 2, 3, 131, 13133]
    }
}

// TODO: optimaze
const cutIndex = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

const memoToPath = () => {
    const cache: Record<string, string[]> = {}
    return <O extends object>(path: Path<O>) => {
        if(cache[path]) {
            return cache[path]
        }

        const res: string[] = [];

        (path as string).replace(cutIndex, function(match, number): any {
            res.push(number || match);
        })

        cache[path] = res

        return cache[path]
    }
}

const toPath = memoToPath()

function get<O extends object>(obj: O) {
    return function<P extends Path<O>>(path: P): PathValue<O, P> | undefined {
        const ks = toPath<O>(path)

        let index = 0,
            length = ks.length,
            res: unknown = obj

        while (res != null && index < length) {
            res = res[ks[index++]]
        }
        return (index && index == length ? res : undefined) as PathValue<O, P> | undefined
    }
}

describe('object get', () => {
    test('array prop', () => {
        const value = get(user)('values.indeces[0]')
    })
})
