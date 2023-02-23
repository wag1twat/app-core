import Runtypes from 'runtypes';
type MappedVariablesRuntypes<V extends readonly string[]> = Record<V[number], Runtypes.String>;
type MappedVariables<V extends readonly string[]> = Record<V[number], string | undefined>;
type MappedVariablesContract<V extends readonly string[]> = Runtypes.Record<MappedVariablesRuntypes<V>, false>;
type RequiredEnvOptions = {
    checkOnInitializeClass?: boolean;
};
export type { RequiredEnvOptions, MappedVariablesRuntypes, MappedVariables, MappedVariablesContract };
