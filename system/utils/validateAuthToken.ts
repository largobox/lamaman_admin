import { ValidationError } from 'errors'
import { ValidateAuthTokenSignature } from './utils.types'
import { validateAuthTokenPayload } from 'validations'
import logger from 'logger'


const validateAuthToken: ValidateAuthTokenSignature = (token) => {
    if (!token) return false

    const [, tokenPayload] = token.split('.')
    const decodedPayload = window.atob(tokenPayload)

    try {
        const payload = JSON.parse(decodedPayload)
        const isValid = validateAuthTokenPayload(payload)
        const isNotExpired = payload.expiredAt - Date.now() > 0

        if (validateAuthTokenPayload.errors !== null) {
            throw new ValidationError(validateAuthTokenPayload)
        }

        return isValid && isNotExpired
    } catch (error) {
        logger.error({ error, functionName: 'validateAuthToken' })

        return false
    }
}

export default validateAuthToken
