class UnprocessableContentError extends Error {
    constructor() {
        super('Сервер. Ошибка 422')

        this.name = 'UnprocessableContentError'
    }
}

export default UnprocessableContentError
