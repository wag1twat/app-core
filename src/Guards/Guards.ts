class Guards {
    static isString = (value: unknown): value is string => {
        return typeof value === 'string'
    }
    static isNumber = (value: unknown): value is number => {
        return typeof value === 'number' && !isNaN(value)
    }
    static isBoolean = (value: unknown): value is boolean => {
        return typeof value === 'boolean'
    }
    static isNull = (value: unknown): value is null => {
        return value === null
    }
    static isUndefined = (value: unknown): value is undefined => {
        return typeof value === 'undefined'
    }
    static isArrayConstructor = <T extends Array<never>>(
        value: object
    ): value is T => {
        return value.constructor && value.constructor === Array
    }
    static isObjectConstructor = <T extends object>(
        value: object
    ): value is T => {
        return value.constructor && value.constructor === Object
    }
    static isObject = (value: unknown): value is object => {
        return value !== null && typeof value === 'object'
    }
    static isFunc = (value: unknown): value is Function =>
        typeof value === 'function'
}

export { Guards }
