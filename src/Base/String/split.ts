import { Split } from '../types/utils'

const split =
    <S extends string>(string: S) =>
    <Separator extends string | RegExp>(
        separator: Separator,
        limit?: number | undefined
    ): Separator extends string ? Split<S, Separator> : string[] => {
        return `${string}`.split(separator, limit) as any
    }

export { split }
