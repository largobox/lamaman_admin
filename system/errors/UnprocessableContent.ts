class UnprocessableContentError extends Error {
    constructor() {
        super('Серверная ошибка. Код 422')

        this.name = 'UnprocessableContentError'
    }
}

export default UnprocessableContentError
