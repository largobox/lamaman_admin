const fileSchema = {
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
    additionalProperties: true,
}

const trackFormSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
        tracksCollectionId: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
        trackFile: fileSchema,
    },
    required: ['name', 'tracksCollectionId', 'trackFile'],
    additionalProperties: false,
}

export default trackFormSchema
