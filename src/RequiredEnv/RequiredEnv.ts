import { Record as RuntypesRecord, String as RuntypesString } from 'runtypes'
import {
    MappedVariables,
    MappedVariablesContract,
    MappedVariablesRuntypes,
    RequiredEnvOptions,
} from './types'

const defaultOptions: RequiredEnvOptions = {
    checkOnInitializeClass: true,
}

class RequiredEnv<V extends readonly string[]> {
    private _variables: V
    private _contract: MappedVariablesContract<V>

    constructor(variables: V, options: RequiredEnvOptions = defaultOptions) {
        this._variables = variables

        this._contract = this.createContract()

        const { checkOnInitializeClass } = options

        if (checkOnInitializeClass) {
            this.check()
        }
    }

    private createContract() {
        return RuntypesRecord(
            this._variables.reduce<MappedVariablesRuntypes<V>>(
                (a, c) => ({ ...a, [c]: RuntypesString }),
                {} as MappedVariablesRuntypes<V>
            )
        )
    }

    public check() {
        this._contract.check(this.getVariables())
    }

    public getVariables(): MappedVariables<V> {
        return this._variables.reduce<MappedVariables<V>>(
            (a, v) => ({ ...a, [v]: process.env[v] }),
            {} as MappedVariables<V>
        )
    }
}

export { RequiredEnv }
