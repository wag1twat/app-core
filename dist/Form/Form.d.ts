interface FormConstructor<T extends object> {
    defaultValues: T;
}
declare class Form<T extends object> {
    constructor(form: FormConstructor<T>);
}
declare const form: <T extends object>(formConstructor: FormConstructor<T>) => Form<T>;
export { form, Form };
