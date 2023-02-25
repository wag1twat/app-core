import { Types } from '../Types'

const split =
    <S extends string>(string: S) =>
    <Separator extends string>(
        separator: string,
        limit?: number | undefined
    ): Types.String.Split<S, Separator> => {
        return `${string}`.split(separator, limit) as any
    }

export default split
