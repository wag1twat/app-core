import { Types } from '../Types'
import { $Object } from '../Object'
import split from './split'

const replaceAll =
    <S extends string>(string: S) =>
    <P extends { [x: string]: any }, Separator extends string = string>(
        separator: Separator,
        properties: P
    ): Types.String.ReplaceAll<S, P> => {
        const result = []

        const parts = split(string)(separator)

        for (let i = 0; i < parts.length; i++) {
            const property = $Object<P>(properties).get(parts[i])

            if ($Object<P>(properties).get(parts[i])) {
                result.push(property)
            } else {
                result.push(parts[i])
            }
        }

        return result.join(separator) as Types.String.ReplaceAll<S, P>
    }

export default replaceAll
