import { Guards } from '../../Guards'

export const nonNullOrUndefined = <T extends unknown>(value: T): boolean => {
    return !Guards.isNull(value) && !Guards.isUndefined(value)
}

export const nonEmptyString = <T extends string>(value: T): boolean => {
    return value !== ''
}
