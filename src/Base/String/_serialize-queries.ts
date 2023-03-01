import { ToQueriesOptions } from "../Object"
import split from "./split"

const isObject = (value: string, accessor: ToQueriesOptions['objectAccsessor']): value is `${string}${typeof accessor}${string}` => {
    return split(value)(accessor).length === 2
}

const isArray = (value: string, accessor: ToQueriesOptions['arrayAccsessor']): value is `${string}${typeof accessor}` => {
    return value.slice(-2) === accessor
}

type Result = {
    [ x: string]: any
}

// TODO: make type from const string ???

const serializeQueries = <S extends string>(objectAccsessor: ToQueriesOptions['objectAccsessor'], arrayAccsessor: ToQueriesOptions['arrayAccsessor'], queryString: S) => {
    const result: Result = {}
        
    const queries = split<S>(queryString)('&')

    let length = queries.length, index = 0

    while(index < length) {
        const [key, value] = split(queries[index])('=')

        if(isObject(key, objectAccsessor)) {
            const [prop, k] = split(key)(objectAccsessor)
            result[prop] = Object.assign(result[prop] || {}, serializeQueries(objectAccsessor, arrayAccsessor, `${k}=${value}`))
        }
        else if(isArray(key, arrayAccsessor)) {
            const prop = key.substring(0, key.indexOf(arrayAccsessor))
            result[prop] = [...result[prop] || [], value]
        }
        else {
            result[key] = value
        }

        index++
    }

    return result
}