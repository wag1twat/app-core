import { MappedVariables, RequiredEnvOptions } from './types';
declare class RequiredEnv<V extends readonly string[]> {
    private _variables;
    private _contract;
    constructor(variables: V, options?: RequiredEnvOptions);
    private createContract;
    check(): void;
    getVariables(): MappedVariables<V>;
}
export { RequiredEnv };
