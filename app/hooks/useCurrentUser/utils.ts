import { LOCAL_STORAGE_AUTH_TOKEN } from 'app-utils'
import {
    GetInitialCurrentUserSignature,
    TokenToCurrentUserSignature,
    ValidateAuthTokenSignature,
} from './useCurrentUser.types'
import { validateAuthTokenPayload } from 'validations'


export const validateAuthToken: ValidateAuthTokenSignature = (token) => {
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

export const tokenToCurrentUser: TokenToCurrentUserSignature = (token) => {
    const [, tokenPayload] = token.split('.')
    const decodedPayload = window.atob(tokenPayload)
    const payload = JSON.parse(decodedPayload)

    return payload
}

export const getInitialCurrentUser: GetInitialCurrentUserSignature = () => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

    const isValid = validateAuthToken(token)

    if (!isValid) return null

    const currentUser = tokenToCurrentUser(token)

    return currentUser
}
