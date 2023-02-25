const get =
    <O extends object>(obj: O) =>
    <K extends string>(key: K | keyof O) => {
        if (obj.hasOwnProperty(key)) {
            return obj[key as Exclude<typeof key, K>]
        }
        return undefined
    }

export default get
