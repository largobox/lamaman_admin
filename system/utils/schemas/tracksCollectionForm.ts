const tracksCollectionFormSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
    },
    required: ['name'],
    additionalProperties: false,
}

export default tracksCollectionFormSchema
