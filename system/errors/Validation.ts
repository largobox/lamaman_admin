import { ValidateFunction } from 'ajv'
import { ajv } from 'validations'


class ValidationError extends Error {
    constructor(func: ValidateFunction) {
        const message = `Клиент. Ошибка валидации. ${ajv.errorsText(
            func.errors,
        )}`
        super(message)

        this.name = 'ValidationError'
    }
}

export default ValidationError
