class UnauthorizedError extends Error {
    constructor(message?: string) {
        super(message || 'Серверная ошибка. Код 401')

        this.name = 'UnauthorizedError'
    }
}

export default UnauthorizedError
