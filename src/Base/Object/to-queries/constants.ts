import { ToQueriesOptions } from "./types"

 export const defaultToQueriesOptions: ToQueriesOptions = {
            skipNull: true,
            skipUndefined: true,
            arrayAccsessor: '[]',
            objectAccsessor: '.',
        }

        export const toQueriesAccsessors = {
            '.': ['.', ''] as const,
            '[]': ['[', ']'] as const,
            '{}': ['{', '}'] as const,
        }