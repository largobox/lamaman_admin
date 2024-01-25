const loginFormSchema = {
    type: 'object',
    properties: {
        login: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
        password: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
    },
    required: ['login', 'password'],
    additionalProperties: false,
}

export default loginFormSchema
