const message = (key: string) =>
    JSON.stringify(
        {
            message: `Unique exception, you can't use duplicate < ${key} > in params`,
        },
        null,
        2
    )

class UniqueParamException extends Error {
    constructor(key: string) {
        super(message(key))
    }
}

export { UniqueParamException }
