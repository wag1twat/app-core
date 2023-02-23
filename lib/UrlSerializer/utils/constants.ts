import { UrlSerializerOptions } from "./types"

const accsessors = {
    '.': ['.', ''] as const,
    '[]': ['[', ']'] as const,
    '{}': ['{', '}'] as const,
}

const defaultSerializeOptions: UrlSerializerOptions = {
    skipNull: true,
    skipUndefined: true,
    arrayAccsessor: '[]',
    objectAccsessor: '.'
}

export { accsessors, defaultSerializeOptions }