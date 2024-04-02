const authTokenPayloadSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            minLength: 1,
        },
        role: {
            type: 'string',
            minLength: 1,
        },
        expiredAt: {
            type: 'number',
            minimum: 0,
        },
    },
    required: ['id', 'role', 'expiredAt'],
    additionalProperties: false,
}

export default authTokenPayloadSchema
