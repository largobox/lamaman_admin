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
    /*
        Решение для сценария, когда файл не выбран, а значит значение null
        и необходимо выводить привычное сообщение валидации,
        в противном случае выйдет "must be object"
    */
    errorMessage: {
        type: 'Обязательное',
    },
}

const trackFormSchema = {
    type: 'object',
    properties: {
        file: fileSchema,
        name: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
        performerId: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
        tracksCollectionIds: {
            type: 'array',
            items: {
                type: 'string',
            },
            minItems: 1,
        },
    },
    required: ['file', 'name', 'performerId', 'tracksCollectionIds'],
    additionalProperties: false,
}

export default trackFormSchema
