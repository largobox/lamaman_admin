import { LOCAL_STORAGE_AUTH_TOKEN } from 'consts'
import { GetInitialCurrentUserSignature } from './utils.types'
import { tokenToCurrentUser, validateAuthToken } from 'utils'


const getInitialCurrentUser: GetInitialCurrentUserSignature = () => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)

    const isValid = validateAuthToken(token)

    if (!isValid) return null

    const currentUser = tokenToCurrentUser(token)

    return currentUser
}

export default getInitialCurrentUser
