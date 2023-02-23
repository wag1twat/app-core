import { SerializerOptions } from "./types"

const accsessors = {
    '.': ['.', ''] as const,
    '[]': ['[', ']'] as const,
    '{}': ['{', '}'] as const,
}

const defaultSerializeOptions: SerializerOptions = {
    skipNull: true,
    skipUndefined: true,
    arrayAccsessor: '[]',
    objectAccsessor: '.'
}

export { accsessors, defaultSerializeOptions }