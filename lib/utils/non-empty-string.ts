export const nonEmptyString = <T extends string>(value: T): boolean => {
    return value !== ""
}