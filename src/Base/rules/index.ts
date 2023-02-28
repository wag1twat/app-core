import { Guards } from '../../Guards'

export const noNullAndUndefined = <T extends unknown>(value: T): boolean => {
    return !Guards.isNull(value) && !Guards.isUndefined(value)
}

export const noEmptyString = <T extends string>(value: T): boolean => {
    return value !== ''
}
