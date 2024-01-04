import { useState } from 'react'
import {
    getInitialCurrentUser,
    tokenToCurrentUser,
    validateAuthToken,
} from './utils'
import { LOCAL_STORAGE_AUTH_TOKEN } from 'app-utils'


const useCurrentUser = () => {
    /*
        TS failed. Не показывает, что currentUser может быть null,
        при том что сигнатура функции getInitialCurrentUser указана
    */
    const [currentUser, setCurrentUser] = useState(getInitialCurrentUser())

    const login = (token: string) => {
        const isValid = validateAuthToken(token)

        if (!isValid) return

        localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token)

        setCurrentUser(tokenToCurrentUser(token))
    }

    const logout = () => {
        setCurrentUser(null)
    }

    return {
        isAuthorized: currentUser !== null,

        login,
        logout,
    }
}

export default useCurrentUser
