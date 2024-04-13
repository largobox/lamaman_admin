class NotFoundError extends Error {
    constructor() {
        super('Сервер. Ресурс не найден')

        this.name = 'NotFoundError'
    }
}

export default NotFoundError
