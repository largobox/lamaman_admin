class RangeNotSatisfiable extends Error {
    constructor() {
        super('Сервер. Ошибка 416')

        this.name = 'RangeNotSatisfiable'
    }
}

export default RangeNotSatisfiable
