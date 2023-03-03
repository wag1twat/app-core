import { ReplaceAll } from '../types/utils'
import { $Object } from '../Object'
import { split } from './split'
import { Path } from 'Base/types'

const replaceAll =
    <S extends string>(string: S) =>
    <P extends { [x: string]: any }, Separator extends string = string>(
        separator: Separator,
        properties: P
    ): ReplaceAll<S, P> => {
        const result = []

        const parts = split(string)(separator)

        for (let i = 0; i < parts.length; i++) {
            const property = $Object<P>(properties).get(parts[i] as Path<P>)

            if ($Object<P>(properties).get(parts[i] as Path<P>)) {
                result.push(property)
            } else {
                result.push(parts[i])
            }
        }

        return result.join(separator) as ReplaceAll<S, P>
    }

export { replaceAll }
