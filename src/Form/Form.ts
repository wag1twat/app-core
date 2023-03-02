interface FormConstructor<T extends object> {
    defaultValues: T
}

class Form<T extends object> {
    constructor(form: FormConstructor<T>) {}
}

const form = <T extends object>(formConstructor: FormConstructor<T>) => new Form(formConstructor)

export { form, Form }
