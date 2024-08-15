class ServiceUnavailableError extends Error {
    constructor() {
        super('Сервер недоступен')

        this.name = 'ServiceUnavailableError'
    }
}

export default ServiceUnavailableError
