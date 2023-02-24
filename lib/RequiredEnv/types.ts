import { String as RuntypesString, Record as RuntypesRecord } from 'runtypes'

type MappedVariablesRuntypes<V extends readonly string[]> = Record<V[number], RuntypesString>
type MappedVariables<V extends readonly string[]> = Record<V[number], string | undefined>
type MappedVariablesContract<V extends readonly string[]> = RuntypesRecord<MappedVariablesRuntypes<V>, false>
type RequiredEnvOptions = {
    checkOnInitializeClass?: boolean
}

export type { RequiredEnvOptions, MappedVariablesRuntypes, MappedVariables, MappedVariablesContract }