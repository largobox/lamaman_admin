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
        tracksCollectionId: {
            type: 'string',
            minLength: 1,
            errorMessage: {
                minLength: 'Обязательное',
            },
        },
    },
    required: ['file', 'name', 'performerId', 'tracksCollectionId'],
    additionalProperties: false,
}

export default trackFormSchema
