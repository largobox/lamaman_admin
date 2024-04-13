class UnauthorizedError extends Error {
    constructor(message?: string) {
        super(message || 'Сервер. Ошибка 401')

        this.name = 'UnauthorizedError'
    }
}

export default UnauthorizedError
