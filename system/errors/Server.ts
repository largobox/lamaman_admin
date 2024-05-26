class ServerError extends Error {
    constructor() {
        super('Сервер. Ошибка 500')

        this.name = 'ServerError'
    }
}

export default ServerError
