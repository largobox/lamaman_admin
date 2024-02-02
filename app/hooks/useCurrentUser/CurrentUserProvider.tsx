import React, { useState, PropsWithChildren } from 'react'
import CurrentUserContext from './CurrentUserContext'
import {
    getInitialCurrentUser,
    tokenToCurrentUser,
    validateAuthToken,
} from './utils'
import { LOCAL_STORAGE_AUTH_TOKEN } from 'app-utils'


const CurrentUserProvider = (props: PropsWithChildren) => {
    const { children } = props
    /*
        TS failed. Не показывает, что currentUser может быть null,
        при том что сигнатура функции getInitialCurrentUser указана
    */
    const [currentUser, setCurrentUser] = useState(getInitialCurrentUser())

    const signIn = (token: string) => {
        const isValid = validateAuthToken(token)

        if (!isValid) return

        localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token)

        setCurrentUser(tokenToCurrentUser(token))
    }

    const signOut = () => {
        setCurrentUser(null)

        localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
    }

    const currentUserProviderValue = {
        isAuthorized: currentUser !== null,
        // ToDo
        name: 'Some user name',
        role: currentUser ? currentUser.role : '',

        signIn,
        signOut,
    }

    return (
        <CurrentUserContext.Provider value={currentUserProviderValue}>
            {children}
        </CurrentUserContext.Provider>
    )
}
export default CurrentUserProvider
