import { TokenToCurrentUserSignature } from './utils.types'


const tokenToCurrentUser: TokenToCurrentUserSignature = (token) => {
    const [, tokenPayload] = token.split('.')
    const decodedPayload = window.atob(tokenPayload)
    const payload = JSON.parse(decodedPayload)

    return payload
}

export default tokenToCurrentUser
