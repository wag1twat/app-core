declare class Guards {
    static isString: (value: unknown) => value is string;
    static isNumber: (value: unknown) => value is number;
    static isBoolean: (value: unknown) => value is boolean;
    static isNull: (value: unknown) => value is null;
    static isUndefined: (value: unknown) => value is undefined;
    static isArrayConstructor: <T extends never[]>(value: object) => value is T;
    static isObjectConstructor: <T extends object>(value: object) => value is T;
    static isTypeofObject: (value: unknown) => value is object;
    static isTypeofFn: (value: unknown) => value is Function;
}
export { Guards };
