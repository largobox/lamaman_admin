class NotFoundError extends Error {
    constructor() {
        super('Серверная ошибка. Ресурс не найден')

        this.name = 'NotFoundError'
    }
}

export default NotFoundError
