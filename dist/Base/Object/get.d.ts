declare const get: <O extends object>(obj: O) => <K extends string>(key: K | keyof O) => O[Exclude<K, K> | Exclude<keyof O, K>] | undefined;
export default get;
