import { ValidateAuthTokenSignature } from './utils.types'
import { validateAuthTokenPayload } from 'validations'


const validateAuthToken: ValidateAuthTokenSignature = (token) => {
    if (!token) return false

    const [, tokenPayload] = token.split('.')
    const decodedPayload = window.atob(tokenPayload)

    try {
        const payload = JSON.parse(decodedPayload)
        const isValid = validateAuthTokenPayload(payload)
        const isNotExpired = payload.expiredAt - Date.now() > 0

        return isValid && isNotExpired
    } catch (error) {
        console.error({ function: 'validateAuthToken', error })

        return false
    }
}

export default validateAuthToken
